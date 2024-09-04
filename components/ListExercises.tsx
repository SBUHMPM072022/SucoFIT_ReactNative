import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { StoryItem } from './StoryItem';
import { ExerciseItem } from './ExerciseItem';

export const ListExercises = ({ categories, onStoryPress }: any) => {
  return (
    <View style={styles.container}>
        <Text style={{ fontWeight: '600', marginBottom: 15 }}>List Exercises</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => <View style={{ backgroundColor: item.category_name == 'All'?'#FF7F3E':'white', borderRadius: 15, paddingVertical: 4, paddingHorizontal: 15, marginHorizontal: 2 }}>
            <Text style={{ color: item.category_name == 'All'?'white':'#8B7E78' }}>{item.category_name}</Text>
        </View>}
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.card_container}>
            <ExerciseItem></ExerciseItem>
            <ExerciseItem></ExerciseItem>
            <ExerciseItem></ExerciseItem>
            <ExerciseItem></ExerciseItem>
            <ExerciseItem></ExerciseItem>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 10,
  },
  card_container: {
    flexDirection: 'row', 
    flexWrap: 'wrap',
    paddingVertical: 15,
    gap: 10
  }
});

