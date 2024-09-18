import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { StoryItem } from './StoryItem';
import { CardEventItem } from './CardEventItem';

export const EventBar = ({ user_id, events, onEventPress }: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={({ item }) => <CardEventItem event_id={item.id} event_name={item.event_name} event_date={item.event_date} location={item.location} user_id={user_id}/>}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
});

