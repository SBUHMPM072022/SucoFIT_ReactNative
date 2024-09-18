import { StyleSheet, View, Text } from "react-native"

export const ListYourEvents = ({events}: any) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: '600', marginBottom: 15 }}>List Your Events</Text>
            <View style={styles.card_container}>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    card_container: {
        flexDirection: 'row', 
        flexWrap: 'wrap',
        paddingVertical: 15,
        gap: 10
    },
})