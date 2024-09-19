import { CardEventItem } from '@/components/CardEventItem';
import { CardRecord } from '@/components/CardRecord';
import { EventBar } from '@/components/EventBar';
import { HeaderPage } from '@/components/HeaderPage';
import { StoryBar } from '@/components/StoryBar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Auth } from '@/utils/Helper';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';
import { Toast } from 'toastify-react-native'

export default function HomeScreen() {
  const [eventData, setEventData] = useState([]);
  const [exerciseData, setExerciseData] = useState([]);
  const [eventLoading, setEventLoading] = useState(true);
  const [eventError, setEventError] = useState(null);
  const [userId, setUserId] = useState(null)

  const handleStoryPress = (story: any) => {
    console.log('Cerita diklik:', story);
  };

  const getEventData = async () => {
    try{  
      const response = await axios.get('http://192.168.50.17:4006/api/v1/web/event');
      const data = response.data.data;

      setEventData(data);
    }catch(error: any){
      setEventError(error)
    }finally{
      setEventLoading(false)
    }
  }

  const getExerciseData = async () => {
    try{
      const response = await axios.get('http://192.168.50.17:4006/api/v1/web/exercise');
      const data = response.data.data;

      console.log(data);
      

      setExerciseData(data);
    }catch(error: any){
      Toast.error('An error occurred!', 'top');
    }
  }

  const getUserData = async () => {
    try{
      const getUserId: any = await AsyncStorage.getItem("user_id");
      if(getUserId) setUserId(getUserId);
    }catch(error){
      console.log(error);
    }
  }

  const stories = [
    {
      id: '1',
      username: 'Joging',
      imageUrl: 'https://example.com/story1.jpg',
      viewed: false,
    },
    {
      id: '2',
      username: 'Badminton',
      imageUrl: 'https://example.com/story2.jpg',
      viewed: true,
    },
  ];

  useEffect(() => {
    Auth.CheckAuth(),
    getEventData();
    getUserData();
    getExerciseData();
  },[]);
  

  return (
    <ThemedView style={{ flex: 1 }}>
      <HeaderPage headerTitle='Home' />
      <View style={{ marginTop: 90, backgroundColor: '#F8F8F8', paddingHorizontal: 20 }}>
        <StoryBar key={1} exercises={exerciseData} onStoryPress={handleStoryPress} />
        <Text style={styles.sectionTitle}>Your Record</Text>
        <CardRecord />
        <Text style={styles.sectionTitle}>Hot Events</Text>
        <View>
          <EventBar user_id={userId} events={eventData} onEventPress={() => {}}/>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  stickyHeader: {
    backgroundColor: '#FFFFFF', // Warna background header
    paddingTop: 45,
    paddingBottom: 15,
    paddingHorizontal: 20,
  },
  headerText: {
    fontSize: 20,
    color: '#222222', 
    fontFamily: 'PoppinsSemiBold'
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
  sectionTitle: {
    marginBottom: 8,
    marginTop: 15,
    fontFamily: 'PoppinsMedium'
  }
});

