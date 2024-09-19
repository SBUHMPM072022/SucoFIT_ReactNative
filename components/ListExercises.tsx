import React from 'react';
import { View, FlatList, StyleSheet, Text, Button, TouchableOpacity } from 'react-native';
import { StoryItem } from './StoryItem';
import { ExerciseItem } from './ExerciseItem';

export const ListExercises = ({ exercises, categories, activeCategory, handleSelectCategory }: any) => {
  return (
    <View style={styles.container}>
        <Text style={{ fontWeight: '600', marginBottom: 15 }}>List Exercises</Text>
        <FlatList
          data={categories}
          renderItem={({ item }) => 
            // <Button style={{ backgroundColor: item.category_name == 'All'?'#FF7F3E':'white', borderRadius: 15, paddingVertical: 4, paddingHorizontal: 15, marginHorizontal: 2 }}>
            //   <Text style={{ color: item.category_name == 'All'?'white':'#8B7E78' }}>{item.category_name}</Text>
            // </Button>
            <TouchableOpacity
              style={activeCategory == item.category_name? styles.button_active: styles.button_inactive}
              onPress={() => handleSelectCategory(item.category_name)}
            >
              <Text style={activeCategory == item.category_name? styles.text_active: styles.text_inactive}>{item.category_name}</Text>
            </TouchableOpacity>
          }
          keyExtractor={(item) => item.id}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
        <View style={styles.card_container}>
            {exercises &&
              exercises.map((value: any, index: any) => {
                return (
                  <ExerciseItem key={index} exercise={value} />      
                )
              }) 
            }
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
  },
  button_active: {
    backgroundColor: '#FF7F3E', 
    borderRadius: 15,
    paddingVertical: 4, 
    paddingHorizontal: 15, 
    marginHorizontal: 2
  },
  button_inactive: {
    backgroundColor: 'white', 
    borderRadius: 15,
    paddingVertical: 4, 
    paddingHorizontal: 15, 
    marginHorizontal: 2
  },
  text_inactive: {
    color: '#8B7E78'
  },
  text_active: {
    color: 'white'
  }
});

