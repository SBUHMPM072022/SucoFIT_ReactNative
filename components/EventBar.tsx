import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { StoryItem } from './StoryItem';
import { CardEventItem } from './CardEventItem';

export const EventBar = ({ events, onEventPress }: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={events}
        renderItem={({ item }) => <CardEventItem event_name={item.event_name} event_date={item.event_date} location={item.location}/>}
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

