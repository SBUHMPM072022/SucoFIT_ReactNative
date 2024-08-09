import { View, StyleSheet, Text } from 'react-native';
import { FeatheTemplate, IoniconTemplate } from './navigation/TabBarIcon';

export const CardRecord = () => {
    return (
        <View style={styles.container}>
            <View style={styles.subContainer}>
                <IoniconTemplate name={'footsteps'} size={40} color={'#FF7F3E'}/>
                <View>
                    <Text style={styles.title}>Today</Text>
                    <Text style={styles.subTitle}>3600 <Text style={{ fontSize: 12 }}>steps</Text></Text>
                </View>
            </View>
            <View style={styles.divider} />
            <View style={styles.container}>
                <FeatheTemplate name={'target'} size={40} color={'#FF7F3E'}/>
                <View>
                    <Text style={styles.title}>This Week</Text>
                    <Text style={styles.subTitle}>0/2 <Text style={{ fontSize: 12 }}>exercise</Text></Text>
                </View>
            </View>
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#FFFFFF',
        justifyContent: 'center',
        gap: 10,
        padding: 7,
        borderRadius: 10
    },
    subContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 12
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