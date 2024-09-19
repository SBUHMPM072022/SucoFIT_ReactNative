import { StyleSheet, View, Text } from "react-native"
import { CardEventSmall } from "./CardEventSmall"

export const ListYourEvents = ({events}: any) => {
    return (
        <View style={styles.container}>
            <Text style={{ fontWeight: '600', marginBottom: 15 }}>List Your Events</Text>
            <View style={styles.card_container}>
                {events && 
                    events.map((value: any, index: any) => {
                        return (
                            <CardEventSmall key={index} event_id={value.id} event_name={value.event_name} event_date={value.event_date} location={value.location} />
                        )
                    })
                }
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
    },
    card_container: {
        flexDirection: 'column', 
        paddingVertical: 15,
        gap: 10
    },
})