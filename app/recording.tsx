import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { Dimensions } from 'react-native';
import { FontAwesomeTemplate, IoniconTemplate } from '@/components/navigation/TabBarIcon';
import { useEffect, useState } from 'react';
import { ConfirmationModal } from '@/components/ConfirmationModal';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height } = Dimensions.get('window');

export default function RecordJoging() {
    const [isStart, setIsStart] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);
    const [location, setLocation] = useState(null);
    const [userId, setUserId] = useState(null);
    const [errorMsg, setErrorMsg]: any = useState(null);
    const [exerciseData, setExerciseData]: any = useState({});

    const router: any = useRouter();
    const { exercise }: any = useLocalSearchParams();
    
    const onPress = () => {
      router.push({
        pathname: '/discover'
      });
    }

    const getLocation = async () => {
        let { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== 'granted') {
            setErrorMsg('Permission to access location was denied');
            return;
        }

        let location: any = await Location.getCurrentPositionAsync({});
        setLocation(location.coords);
    }

    const getUserData = async () => {
        try{
          const getUserId: any = await AsyncStorage.getItem("user_id");
          if(getUserId) setUserId(getUserId);
        }catch(error){
          console.log(error);
        }
    }

    useEffect(() => {
        getLocation(); 
        getUserData();   
    }, []);
    
    
    useEffect(() => {
        if(exercise) setExerciseData(JSON.parse(exercise));
    }, [exercise])
    useEffect(() => {
        if(isStart){
            const interval = setInterval(() => {
              setSeconds((prevSeconds) => prevSeconds + 1);
            }, 1000);

            return () => clearInterval(interval);
        }
    }, [isStart]);

    const handleCloseModal = () => {
        setModalVisible(false);
    }

    const handleConfirm = () => {
        setModalVisible(false);
    }

    const handleCancel = () => {
        setModalVisible(false);
        setIsStart(true);
    }

    const handleStopClicked = () => {
        setModalVisible(true);
        setIsStart(false);
    }

    const formatTime = (secs: number) => {
        const hours = Math.floor(secs / 3600);
        const minutes = Math.floor((secs % 3600) / 60);
        const seconds = secs % 60;
        return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    };

    return (
        <ThemedView>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.background_page}>
                <View style={{ backgroundColor: '#027FB9', position: 'absolute', top: 55, left: 10 }}>
                    <TouchableOpacity style={{ flexDirection: 'row', alignItems: 'center' }} onPress={() => onPress()}>
                        <IoniconTemplate name={'chevron-back'} color={'white'}/>
                        <Text style={{ fontSize: 18, color: 'white' }}>Back</Text>
                    </TouchableOpacity>
                </View>
                <Text style={{ fontSize: 24, fontWeight: 600, textAlign: 'center', color: 'white', marginTop: 20 }}>Recording</Text>
                <Text style={{ fontSize: 18, textAlign: 'center', color: 'white'}}>{exerciseData.exercise_name}</Text>
                <View>
                    <View style={styles.timer}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 3 }}>
                            <IoniconTemplate name={'timer-outline'} color={'#FF7F3E'} size={20}/>
                            <Text style={{ fontSize: 18, color: 'white' }}>Time</Text>
                        </View>
                        <View style={styles.timer_card}>
                            <Text style={styles.timer_text}>{formatTime(seconds)}</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.button_container}>
                    <TouchableOpacity onPress={() => setIsStart(false)}>
                        <FontAwesomeTemplate name={'pause'} color={'#FFFFFF'} size={40}/>
                    </TouchableOpacity>
                        {!isStart && 
                            <TouchableOpacity style={styles.circle} onPress={() => setIsStart(true)}>
                                <FontAwesomeTemplate name={'play'} color={'#FFFFFF'} size={40}/>
                            </TouchableOpacity>
                        }
                        {isStart &&
                            <TouchableOpacity style={styles.circle} onPress={() => handleStopClicked()}>
                                <FontAwesomeTemplate name={'stop'} color={'#FFFFFF'} size={40}/>
                            </TouchableOpacity>
                        }
                    <FontAwesomeTemplate name={'location-dot'} color={'#FFFFFF'} size={40}/>
                </View>
            </View>
            {modalVisible &&
                <ConfirmationModal modalVisible={modalVisible} closeModal={handleCloseModal} handleConfirm={handleConfirm} handleCancel={handleCancel} location={location} exercise_id={exerciseData.id} duration={seconds} user_id={userId}/>
            }
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    background_page: {
        backgroundColor: '#027FB9',
        height: height,
        flexDirection: 'column',
        justifyContent: 'center'
    },
    timer: {
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: 30
    },
    timer_card: {
        flexDirection: 'row',
        gap: 3,
        padding: 10,
        backgroundColor: 'rgba(255, 255, 255, 0.33)',
        width: '70%',
        justifyContent: 'center',
        marginTop: 10,
        borderRadius: 6
    },
    timer_text: {
        fontSize: 35,
        fontWeight: '600',
        color: 'white'
    },
    circle: {
        width: 100, 
        height: 100,
        borderRadius: 50, 
        backgroundColor: '#FF7F3E', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    button_container: {
        flexDirection: 'row',
        marginTop: 25,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 20
    }
})