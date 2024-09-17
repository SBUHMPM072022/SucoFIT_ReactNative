import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { Stack } from 'expo-router';
import { Dimensions } from 'react-native';
import { FontAwesomeTemplate, IoniconTemplate } from '@/components/navigation/TabBarIcon';
import { useEffect, useState } from 'react';
import { ConfirmationModal } from '@/components/ConfirmationModal';

const { height } = Dimensions.get('window');

export default function RecordJoging() {
    const [isStart, setIsStart] = useState(false);
    const [seconds, setSeconds] = useState(0);
    const [modalVisible, setModalVisible] = useState(false);

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
                <Text style={{ fontSize: 24, fontWeight: 600, textAlign: 'center', color: 'white', marginTop: 20 }}>Recording</Text>
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
                <ConfirmationModal modalVisible={modalVisible} closeModal={handleCloseModal} handleConfirm={handleConfirm} handleCancel={handleCancel}/>
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