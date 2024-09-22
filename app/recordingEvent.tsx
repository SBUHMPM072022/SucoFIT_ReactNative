import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Stack, useRouter, useLocalSearchParams } from 'expo-router';
import { Dimensions } from 'react-native';
import * as Location from 'expo-location';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { FontAwesomeTemplate, IoniconTemplate } from '@/components/navigation/TabBarIcon';
import { useEffect, useState } from 'react';
import { ThemedView } from '@/components/ThemedView';
import axios from 'axios';
import { TakePictureModal } from '@/components/TakePictureModal';
import { GeoLocation } from '@/utils/Helper';
import { Toast } from 'toastify-react-native';

const { height } = Dimensions.get('window');

export default function RecordingEvent() {
    const [eventData, setEventData]: any = useState({});
    const [modalVisible, setModalVisible] = useState(false);
    const [location, setLocation]: any = useState(null);
    const [errorMsg, setErrorMsg]: any = useState(null);
    const [userId, setUserId] = useState(null);
    const { event_id, participation_id }: any = useLocalSearchParams();
    const router: any = useRouter();
    
    const onPress = () => {
        router.push({
          pathname: '/discover'
        });
    }

    const getEventData = async() => {
        try{
            const response = await axios.get(`http://192.168.100.23:4006/api/v1/web/event/${event_id}`);
            const data = response.data.data;

            setEventData(data)
        }catch(error){
            console.log(error);      
        }
    }

    const getUserData = async () => {
        try{
          const getUserId: any = await AsyncStorage.getItem("user_id");
          if(getUserId) setUserId(getUserId);
        }catch(error){
          console.log(error);
        }
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

    useEffect(() => {
        getEventData();
    }, [event_id, participation_id])

    useEffect(() => {
        getLocation();
        getUserData();
    }, [])

    const handleCloseModal = () => {
        setModalVisible(false);
    }

    const handleConfirm = () => {
        setModalVisible(false);
    }

    const handleCancel = () => {
        setModalVisible(false);
    }

    const handleTakePicture = () => {
        
        const isInArea = GeoLocation.CheckProximityInRange({ 
            latitude_source: eventData.latitude,
            longitude_source: eventData.longitude,
            latitude_person: location.latitude,
            longitude_person: location.longitude,
            threshold: 10000000000000000
        })

        if(!isInArea){
            Toast.error('Sorry, you are outside the attendance range for the event.', 'top');
        }else{
            setModalVisible(true);
        }

    }

    
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
                <View>
                    <View>
                        <Text style={{ fontSize: 22, fontWeight: 600, color: 'white' }}>{eventData.event_name}</Text>
                        <Text style={{ fontSize: 16, color: 'white' }}>{eventData.event_description}</Text>
                    </View>
                    <View style={{ marginTop: 10, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <View style={{ backgroundColor: '#FF7F3E', width: 150, paddingVertical: 3, paddingHorizontal: 10,borderRadius: 20 }}>
                            <Text style={{ color: 'white' }}>{eventData.location}</Text>
                        </View>
                        <Text style={{ color: 'white', fontSize: 13, fontWeight: 600, textAlign: 'right' }}>{eventData.event_date}</Text>
                    </View>
                    <View style={{ marginTop: 19, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                        <Text style={{ color: 'white' }}>This event is worth <Text style={{ color: '#FF7F3E', fontWeight: 600, fontSize: 18 }}>{eventData.point}</Text> poin</Text>
                    </View>
                </View>
                <View style={{ marginTop: 40 }}>
                    <TouchableOpacity style={styles.circle} onPress={() => handleTakePicture()}>
                        <IoniconTemplate name={'camera-outline'} color={'#FFFFFF'} style={{ marginBottom: 0 }} size={40}/>
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: 40, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingHorizontal: 20 }}>
                    <Text style={{ color: 'white', fontWeight: 200 }}><Text style={{ color: '#FF7F3E', fontWeight: 600 }}>* </Text>Please take a picture as proof of the activity for the validation process of participation.</Text>
                </View>
            </View>
            {modalVisible &&
                <TakePictureModal modalVisible={modalVisible} closeModal={handleCloseModal} handleConfirm={handleConfirm} handleCancel={handleCancel} participation_id={participation_id} location={location} point={eventData.point} user_id={userId} />
            }
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    background_page: {
        backgroundColor: '#027FB9',
        height: height+100,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        width: 90, 
        height: 90,
        borderRadius: 50, 
        backgroundColor: '#FF7F3E', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
})