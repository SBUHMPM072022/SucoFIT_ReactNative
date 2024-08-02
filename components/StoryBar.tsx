import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { StoryItem } from './StoryItem';

export const StoryBar = ({ stories, onStoryPress }: any) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={stories}
        renderItem={({ item }) => <StoryItem story={item} onPress={onStoryPress} />}
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

