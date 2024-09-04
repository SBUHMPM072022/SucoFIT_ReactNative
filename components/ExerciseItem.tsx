import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export const ExerciseItem = ({ story, onPress } : any) => {
    return (
      <TouchableOpacity onPress={() => onPress(story)} style={styles.storyItem}>
        <Image source={require('../assets/images/badminton.jpg')} resizeMode='cover' style={styles.image}/>
        <Text style={{ paddingVertical: 4, paddingHorizontal: 3, fontWeight: '600', color: '#222222' }}>Futsal / Mini Soccer</Text>
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