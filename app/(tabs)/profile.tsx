import { ThemedView } from '@/components/ThemedView';
import { StyleSheet, Text, View, Image, TextInput } from 'react-native';
import { Stack } from 'expo-router';
import { Dimensions } from 'react-native';
import { FontAwesomeTemplate, IoniconTemplate } from '@/components/navigation/TabBarIcon';
import { CardRecord } from '@/components/CardRecord';
import { useState } from 'react';

const { height } = Dimensions.get('window');

export default function Profile() {
    const [fullname, setFullname] = useState('');

    return (
        <ThemedView>
            <View style={{ height: height, overflow: 'scroll' }}>
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
                <View style={styles.container}>
                    <CardRecord />
                    <View style={{ marginTop: 25 }} >
                        <View>
                            <Text style={{ fontSize: 18, marginBottom: 10 }}>General Information</Text>
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <Text style={{ marginBottom: 5 }}>Fullname</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Fullname"
                                placeholderTextColor="#D2D2D2"
                                value={fullname}
                                onChangeText={setFullname}
                            />
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <Text style={{ marginBottom: 5 }}>Division</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Division"
                                placeholderTextColor="#D2D2D2"
                                value={fullname}
                                onChangeText={setFullname}
                            />
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <Text style={{ marginBottom: 5 }}>Email</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Email"
                                placeholderTextColor="#D2D2D2"
                                value={fullname}
                                onChangeText={setFullname}
                            />
                        </View>
                        <View style={{ marginTop: 2 }}>
                            <Text style={{ marginBottom: 5 }}>Phone Number</Text>
                            <TextInput
                                style={styles.input}
                                placeholder="Phone Number"
                                placeholderTextColor="#D2D2D2"
                                value={fullname}
                                onChangeText={setFullname}
                            />
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
        borderBottomLeftRadius: 10,
        borderBottomRightRadius: 10
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
        alignItems: 'center',
    },
    letter: {
        fontSize: 12, 
        fontWeight: 'bold',
        color: '#FFFFFF'
    },
    container: {
        position: 'absolute',
        top: 265,
        width: '100%',
        height: 'auto',
        paddingHorizontal: 20
    },
    input: {
        height: 40,
        width: '100%',
        backgroundColor: 'white',
        borderColor: '#D2D2D2',
        color: '#D2D2D2',
        paddingLeft: 20,
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 10
    },
})