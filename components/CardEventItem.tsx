import { Text, View, StyleSheet, TouchableOpacity } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

export const CardEventItem = () => {
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
                        <Text style={styles.title}>Event Marathon Sucofindo</Text>
                        <Text style={styles.text_thin}>Sucofindo - GBK</Text>
                        <View style={{ marginVertical: 5 }}>
                            <Text style={styles.text_light}>Held On</Text>
                            <Text style={styles.text_light}>20 July 2024</Text>
                        </View>
                        <View style={{ marginVertical: 7 }}>
                            <TouchableOpacity
                                style={styles.button_orange}
                                onPress={() => alert('Custom Button ditekan!')}
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
        flexDirection: 'row'
    },
    card_container: {
        flexDirection: 'row'
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
        width: '50%',
        padding: 15
    },
    button_orange: {
        backgroundColor: '#FF7F3E',
        borderRadius: 12
    },
    button_text: {
        color: '#FFFFFF',
        textAlign: 'center',
        marginVertical: 5,
        fontSize: 18
    }
  });