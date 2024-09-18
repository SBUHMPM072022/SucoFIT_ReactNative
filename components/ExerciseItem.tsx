import React from 'react';
import { useRouter } from 'expo-router';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export const ExerciseItem = ({ exercise } : any) => {
  const router: any = useRouter();

  const onPress = () => {
    router.push({
      pathname: '/recording'
    });
  }

  return (
    <TouchableOpacity onPress={() => onPress()} style={styles.storyItem}>
      <Image source={{ uri: `http://localhost:4006/${exercise.exercise_cover}` }} resizeMode='cover' style={styles.image}/>
      <Text style={{ paddingVertical: 4, paddingHorizontal: 3, fontWeight: '600', color: '#222222' }}>{exercise.exercise_name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
    storyItem: {
        width: '48%',
        height: 140,
        backgroundColor: 'white',
        padding: 5,
        borderRadius: 10
        
    },
    image: {
        flex: 1, 
        width: '100%', 
        height: '100%',
        borderRadius: 10
    }
  });