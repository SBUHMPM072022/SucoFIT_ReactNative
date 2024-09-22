import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export const StoryItem = ({ exercise, onPress } : any) => {
    return (
      <TouchableOpacity onPress={() => onPress(exercise)} style={styles.storyItem}>
        <Image source={{ uri: `http://192.168.100.23:4006/${exercise.exercise_cover}` }} style={styles.image} />
        <Text style={styles.username}>{exercise.exercise_name}</Text>
      </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    storyItem: {
      alignItems: 'center',
      marginRight: 20
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 35,
      borderWidth: 1,
    },
    username: {
      marginTop: 5,
      fontSize: 14,
      color: '#333',
      fontFamily: 'PoppinsRegular'
    },
  });