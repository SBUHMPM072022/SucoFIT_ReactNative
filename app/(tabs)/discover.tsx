import { Image, StyleSheet, Platform, View, Dimensions, ScrollView, SafeAreaView, RefreshControl } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { HeaderPage } from '@/components/HeaderPage';
import { ListExercises } from '@/components/ListExercises';
import { useCallback, useEffect, useState } from 'react';
import { Auth } from '@/utils/Helper';
import axios from 'axios';
import { ListYourEvents } from '@/components/ListYourEvents';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height } = Dimensions.get('window');

export default function HomeScreen() {
  const [exerciseData, setExerciseData] = useState([]);
  const [exerciseLoading, setExerciseLoading] = useState(true);
  const [exerciseError, setExerciseError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');
  const [userId, setUserId] = useState(null);
  const [eventParticipate, setEventParticipate] = useState([]);
  const [refreshing, setRefreshing] = useState(false)

  const categories = [
    {
      id: 1,
      category_name: 'All'
    },
    {
      id: 2,
      category_name: 'Recomendation'
    },
    {
      id: 3,
      category_name: 'Sports'
    },
    {
      id: 4,
      category_name: 'Cardio'
    },
    {
      id: 5,
      category_name: 'Strength'
    },
    {
      id: 6,
      category_name: 'Flexibility'
    },
  ];

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getListExercise();
      if(userId){
        getListEventParticipate();
      }
      setRefreshing(false);
    }, 2000);
  },[])

  const handleSelectCategory = (selectedValue: string) => {
    setActiveCategory(selectedValue);
  }

  const getUserData = async () => {
    try{
      const getUserId: any = await AsyncStorage.getItem("user_id");
      if(getUserId) setUserId(getUserId);
    }catch(error){
      console.log(error);
    }
  }

  const getListExercise = async () => {
    try{
      const response = await axios.get(`http://192.168.100.23:4006/api/v1/web/exercise?category_name=${activeCategory}`);
      const data = response.data.data;

      setExerciseData(data);
    }catch(error: any){
      setExerciseLoading(error)
    }finally{
      setExerciseLoading(false);
    }
  }

  const getListEventParticipate = async () => {
    try{
      const response = await axios.get(`http://192.168.100.23:4006/api/v1/web/event-participation/${userId}`);
      const data = response.data.data;

      console.log(data);
      
      setEventParticipate(data);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    Auth.CheckAuth();
    getListExercise();
    getUserData();
    if(userId){
      getListEventParticipate();
    }
  },[activeCategory, userId]);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <HeaderPage headerTitle='Discover' />
      <ScrollView  
        showsVerticalScrollIndicator={false} 
        contentContainerStyle={{ paddingHorizontal: 20 }} 
        style={{ marginTop: 90, backgroundColor: '#F8F8F8' }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
          <ListExercises exercises={exerciseData} categories={categories} activeCategory={activeCategory} handleSelectCategory={handleSelectCategory}/>
          <ListYourEvents events={eventParticipate}/>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
