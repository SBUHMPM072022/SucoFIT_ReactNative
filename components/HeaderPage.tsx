import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export const HeaderPage = ({headerTitle}: any) => {
    return (
        <View style={styles.header}>
            <Text style={styles.title}>{headerTitle}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    header: {
      width: '100%',
      paddingTop: 45,
      paddingBottom: 15,
      paddingHorizontal: 20,
      backgroundColor: '#FFFFFF',
      color: '#222222',
      position: 'absolute',
      fontFamily: 'PoppinsSemiBold',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
    },
  });