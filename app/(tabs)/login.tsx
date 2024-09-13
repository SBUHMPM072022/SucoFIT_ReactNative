import { useState } from "react";
import { ThemedView } from "@/components/ThemedView";
import { Stack } from "expo-router";
import { View, Image, StyleSheet, Dimensions, Text, TextInput, TouchableOpacity } from "react-native";

const { height } = Dimensions.get('window');

export default function Login() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <ThemedView>
            <Stack.Screen options={{ headerShown: false }} />
            <View style={styles.background_page}>
                <Image
                    source={require('../../assets/images/logo.png')} 
                      style={styles.image}
                />
                <Text style={{ fontSize: 16, color: "#222222" }}><Text style={{ color: "#027FB9" }}>Exercise</Text> unlocks your</Text>
                <Text style={{ fontSize: 16, color: "#222222" }}><Text style={{ color: "#FF7F3E" }}>productivity</Text> potential</Text>
                <View style={{width: '80%' }}>
                    <View style={{ marginTop: 50 }}>
                        <Text style={{ fontWeight: '600', color: '#444444', marginBottom: 5 }}>Username / Email</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Username"
                            placeholderTextColor="#D2D2D2"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    <View style={{ marginTop: 6 }}>
                        <Text style={{ fontWeight: '600', color: '#444444', marginBottom: 5 }}>Password</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            placeholderTextColor="#D2D2D2"
                            value={name}
                            onChangeText={setName}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', gap: 10, marginTop: 10, justifyContent: 'space-between' }}>
                        <TouchableOpacity
                                style={styles.button_orange}
                                onPress={() => alert('Custom Button ditekan!')}
                        >
                            <Text style={styles.button_text} >Sign In</Text>
                        </TouchableOpacity>
                        <TouchableOpacity
                                style={styles.button_blue}
                                onPress={() => alert('Custom Button ditekan!')}
                        >
                            <Text style={styles.button_text} >Register</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </ThemedView>
    )
}

const styles = StyleSheet.create({
    background_page: {
        backgroundColor: 'white',
        height: height,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: 200,
        height: 200,
        borderRadius: 50,
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: '#D2D2D2',
        color: '#D2D2D2',
        paddingLeft: 20,
        borderWidth: 1,
        marginBottom: 12,
        borderRadius: 10
    },
    button_orange: {
        backgroundColor: '#FF7F3E',
        borderRadius: 12,
        paddingVertical: 4,
        width: '48%'
    },
    button_blue: {
        backgroundColor: '#027FB9',
        borderRadius: 12,
        paddingVertical: 4,
        width: '48%'
    },
    button_text: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginVertical: 5,
        fontSize: 18
    }
})