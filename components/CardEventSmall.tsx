import { LinearGradient } from "expo-linear-gradient"
import { View, StyleSheet, Text, TouchableOpacity } from "react-native"
import { useRouter } from 'expo-router';

export const CardEventSmall = ({ event_id, event_name, event_date, location, participation_id, point }: any) => {
    const router: any = useRouter();

    const onPress = ( event_id : number, participation_id: number) => {
        router.push({
          pathname: '/recordingEvent',
          params: { event_id, participation_id },
        });
    }

    return (
        <TouchableOpacity style={styles.container} onPress={() => onPress(event_id, participation_id)}>
            <LinearGradient
              colors={['#0277B5', '#00B4D7']}
              style={styles.gradient}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
            >
                <View style={styles.card_container}>
                    <View style={styles.text_section}>
                            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                                <View>
                                    <Text style={styles.title}>{event_name}</Text>
                                </View>
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
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
    },
    card_container: {
        paddingVertical: 10,
        paddingHorizontal: 10
    },
    gradient: {
        flex: 1,
        borderRadius: 10
    },
    text_section: {
        width: '100%',
        flexDirection: 'column',
        justifyContent: 'space-between'
    },
    title: {
        fontFamily: 'PoppinsMedium', 
        color: '#fff',
        fontSize: 17,
        fontWeight: 'bold',
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
})