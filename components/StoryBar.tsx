import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { StoryItem } from './StoryItem';

export const StoryBar = ({ key, exercises, onStoryPress }: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={({ item }) => <StoryItem key={item.id}  exercise={item} onPress={onStoryPress} />}
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

