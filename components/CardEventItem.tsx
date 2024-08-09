import { Text, View, StyleSheet } from "react-native"
import { IoniconTemplate } from "./navigation/TabBarIcon"
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
              <Text style={styles.text}>Hello, World!</Text>
            </LinearGradient>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row'
    },
    gradient: {
        flex: 1
    },
    text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: 'bold',
    },
    title: {
        fontFamily: 'PoppinsMedium', 
        color: '#0077B7',
        fontSize: 16
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
  });