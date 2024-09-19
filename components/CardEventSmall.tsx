import { LinearGradient } from "expo-linear-gradient"
import { View, StyleSheet, Text } from "react-native"

export const CardEventSmall = ({ event_id, event_name, event_date, location }: any) => {
    return (
        <View style={styles.container}>
            <LinearGradient
              colors={['#0277B5', '#00B4D7']}
              style={styles.gradient}
              start={{ x: 0, y: 1 }}
              end={{ x: 1, y: 0 }}
            >
                <View style={styles.card_container}>
                    <View style={styles.text_section}>
                        <View>
                            <Text style={styles.title}>{event_name}</Text>
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
        </View>
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
})