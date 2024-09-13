import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Stack } from 'expo-router';
import { Dimensions } from 'react-native';
import { FontAwesomeTemplate, IoniconTemplate } from '@/components/navigation/TabBarIcon';

const { height } = Dimensions.get('window');

export default function Profile() {
    return (
        <ThemedView>
            <View style={styles.background_page}>
                <View style={styles.title}>
                    <Text style={{ fontSize: 17, fontWeight: '600', color: 'white', marginTop: 50 }}>Your Profile</Text>
                </View>
                <View style={styles.profile_container}>
                    <Image
                        source={require('../../assets/images/profile.jpg')} 
                      style={styles.image}
                    />
                    <Text style={{ fontSize: 18, color: 'white' }}>Jhon Doe</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 16 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                            <View style={styles.circle}>
                                <Text style={styles.letter}>P</Text>
                            </View>
                            <Text style={styles.header2}>3230</Text>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                            <View style={styles.circle}>
                                <FontAwesomeTemplate name={'users'} color={'#FFFFFF'} size={10}/>
                            </View>
                            <Text style={styles.header2}>20</Text>
                        </View>
                    </View>
                </View>
            </View>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    background_page: {
        backgroundColor: '#027FB9',
        height: 290,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20
    },
    title: {
        marginVertical: 10, 
        flexDirection: 'row',
        justifyContent: 'center'
    },
    profile_container: {
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    header2: {
        fontSize: 16,
        fontWeight: '600',
        color: 'white'
    },
    circle: {
        width: 20, 
        height: 20,
        borderRadius: 50, 
        backgroundColor: '#FF7F3E', 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    letter: {
        fontSize: 12, 
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
})