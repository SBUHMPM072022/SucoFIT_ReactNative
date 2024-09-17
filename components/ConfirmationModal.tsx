import React, { useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet } from 'react-native';

export const ConfirmationModal = ({ modalVisible, closeModal, handleConfirm, handleCancel }: any) => {

  return (
    <View style={styles.container}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => closeModal} 
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Are you sure you want to stop your exercise record?</Text>
            
            <TouchableOpacity
              style={[styles.button, styles.buttonConfirm]}
              onPress={handleConfirm}
            >
              <Text style={styles.textStyle}>Yes, enough for today</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.buttonCancel]}
              onPress={handleCancel}
            >
              <Text style={styles.textStyle}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
    minWidth: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonConfirm: {
    backgroundColor: '#027FB9',
  },
  buttonCancel: {
    backgroundColor: 'red',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

