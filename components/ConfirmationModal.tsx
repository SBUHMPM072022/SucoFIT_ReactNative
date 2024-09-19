import React, { useEffect, useState } from 'react';
import { View, Text, Button, Modal, TouchableOpacity, StyleSheet, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';
import { useRouter } from 'expo-router';

export const ConfirmationModal = ({ modalVisible, closeModal, handleConfirm, handleCancel, location, exercise_id, duration, user_id }: any) => {
  const router: any = useRouter();
    
  const [image, setImage] = useState(null);
  const [aspectRatio, setAspectRatio] = useState(1);

  const openCamera = async () => {
    const { status } = await ImagePicker.requestCameraPermissionsAsync();
    if (status !== 'granted') {
      alert('Permission to access camera is required!');
      return;
    }

    let result: any = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true, 
      aspect: [9, 16], 
      quality: 0.7, 
    });

    if (!result.canceled) {
      const { width, height } = result.assets[0];
      setImage(result.assets[0].uri);
      setAspectRatio(width / height);
    }
  }

  const uploadData = async () => {
    if(!image) return;

    const formData: any = new FormData();
    formData.append('file_photo_evidence', {
      uri: image,
      type: 'image/jpeg', 
      name: 'photo.jpg',
    });

    formData.append('exercise_id', exercise_id);
    formData.append('latitude', location.latitude);
    formData.append('longitude', location.longitude);
    formData.append('duration', duration);
    formData.append('user_id', user_id);

    try{
      const response = await axios.post('http://192.168.50.17:4006/api/v1/web/exercise-record', formData, {
        headers: {
          'Content-Type': 'multipart/form-data', 
        },
      });

      if(response.data.status == 'success'){
        router.push({
          pathname: '/discover'
        });

      }
    }catch(error){
      console.error('Error uploading photo:', error);
    }
  }

  useEffect(() => {
    openCamera();
  }, [])

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
            <View style={{ marginBottom: 10 }}>
              {image && <Image source={{ uri: image }} style={{ width: 200, aspectRatio }} />}
            </View>
            <Text style={styles.modalText}>Are you sure you want to stop your exercise record?</Text>
            
            <TouchableOpacity
              style={[styles.button, styles.buttonConfirm]}
              onPress={() => uploadData()}
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

