import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

export const StoryItem = ({ story, onPress } : any) => {
    return (
      <TouchableOpacity onPress={() => onPress(story)} style={styles.storyItem}>
        <Image source={require('../assets/images/profile.jpg')} style={styles.image} />
        <Text style={styles.username}>{story.username}</Text>
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
      borderWidth: 3,
    },
    username: {
      marginTop: 5,
      fontSize: 14,
      color: '#333',
      fontFamily: 'PoppinsRegular'
    },
  });