import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';
import axios from "axios";
import { Toast } from "toastify-react-native";
import { useState } from "react";

export const CardEventItem = ({ event_id, event_name, event_date, location, registration_date, user_id, point }: any) => {
    const [loading, setLoading] = useState(false);

    const handleJoin = async() => {
        setLoading(true);

        try{
            const joinData = {
                user_id: user_id,
                event_id: event_id
            };

            const response = await axios.post('http://192.168.50.17:4006/api/v1/web/join-event', joinData);
            setLoading(false);

            if(response.status == 211) Toast.error("You have been registered for this event", "top")

            if(response.data.status == 'success') Toast.success("Your event registration was successful!")
            
        }catch(error: any){
            setLoading(false);
        }
    }
    
    return (
        <View style={styles.container}>
            <LinearGradient
              colors={['#0277B5', '#00B4D7']}
              style={styles.gradient}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
            >
                <View style={styles.container}>
                    <View style={styles.text_section}>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                            <Text style={styles.title}>{event_name}</Text>
                            <View style={{ flexDirection: 'row', alignItems: 'center', marginRight: 10 }}>
                                <View style={styles.circle}>
                                    <Text style={styles.letter}>P</Text>
                                </View>
                                <Text style={{ fontWeight: 600, color: 'white' }}> {point}</Text>
                            </View>
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <Text style={styles.text_thin}>{location}</Text>
                            <View style={{ marginVertical: 5 }}>
                                <Text style={styles.text_light}>Held On</Text>
                                <Text style={styles.text_light}>{event_date}</Text>
                            </View>
                        </View>
                        <View style={{ marginVertical: 10 }}>
                            <TouchableOpacity
                                style={styles.button_orange}
                                onPress={() => handleJoin()}
                            >
                                <Text style={styles.button_text} >Join Event</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </LinearGradient>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        width: 300,
        marginRight: 10
    },
    card_container: {
        flexDirection: 'row',
    },
    gradient: {
        flex: 1,
        borderRadius: 10
    },
    text_thin: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '200'
    },
    text_light: {
        color: '#fff',
        fontSize: 14,
        fontWeight: '300'
    },
    title: {
        fontFamily: 'PoppinsMedium', 
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    subTitle: {
        fontSize: 18,
        fontFamily: 'PoppinsSemiBold',
        color: '#222222',
    },
    divider: {
        width: 1,
        height: '100%',
        backgroundColor: '#D8D8D8',
        marginHorizontal: 10,
    },
    text_section: {
        width: '100%',
        padding: 15
    },
    button_orange: {
        backgroundColor: '#FF7F3E',
        borderRadius: 12,
        width: 150
    },
    button_text: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginVertical: 5,
        fontSize: 18
    },
    circle: {
        width: 20, 
        height: 20,
        borderRadius: 50, 
        backgroundColor: '#FF7F3E', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    header2: {
        fontSize: 20,
        fontWeight: '600',
        color: 'white'
    },
    letter: {
        fontSize: 12, 
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
  });