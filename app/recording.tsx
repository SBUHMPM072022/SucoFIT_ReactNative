import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Stack } from 'expo-router';
import { Dimensions } from 'react-native';
import { FontAwesomeTemplate, IoniconTemplate } from '@/components/navigation/TabBarIcon';

const { height } = Dimensions.get('window');

export default function RecordJoging() {
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
                            <Text style={styles.timer_text}>00</Text>
                            <Text style={styles.timer_text}>:</Text>
                            <Text style={styles.timer_text}>00</Text>
                            <Text style={styles.timer_text}>:</Text>
                            <Text style={styles.timer_text}>00</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.button_container}>
                    <FontAwesomeTemplate name={'pause'} color={'#FFFFFF'} size={40}/>
                    <View style={styles.circle}>
                        <FontAwesomeTemplate name={'stop'} color={'#FFFFFF'} size={40}/>
                    </View>
                    <FontAwesomeTemplate name={'location-dot'} color={'#FFFFFF'} size={40}/>
                </View>
            </View>
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