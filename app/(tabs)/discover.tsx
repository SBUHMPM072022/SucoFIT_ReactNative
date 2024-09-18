import { Image, StyleSheet, Platform, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { HeaderPage } from '@/components/HeaderPage';
import { ListExercises } from '@/components/ListExercises';
import { useEffect, useState } from 'react';
import { Auth } from '@/utils/Helper';
import axios from 'axios';
import { ListYourEvents } from '@/components/ListYourEvents';

export default function HomeScreen() {
  const [exerciseData, setExerciseData] = useState([]);
  const [exerciseLoading, setExerciseLoading] = useState(true);
  const [exerciseError, setExerciseError] = useState(null);
  const [activeCategory, setActiveCategory] = useState('All');

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

  const handleSelectCategory = (selectedValue: string) => {
    setActiveCategory(selectedValue);
  }

  const getListExercise = async () => {
    try{
      const response = await axios.get(`http://localhost:4006/api/v1/web/exercise?category_name=${activeCategory}`);
      const data = response.data.data;

      setExerciseData(data);
    }catch(error: any){
      setExerciseLoading(error)
    }finally{
      setExerciseLoading(false);
    }
  }

  useEffect(() => {
    Auth.CheckAuth();
    getListExercise();
  },[activeCategory]);

  return (
    <ThemedView style={{ flex: 1 }}>
      <HeaderPage headerTitle='Discover' />
      <View style={{ marginTop: 90, backgroundColor: '#F8F8F8', paddingHorizontal: 20 }}>
        <ListExercises exercises={exerciseData} categories={categories} activeCategory={activeCategory} handleSelectCategory={handleSelectCategory}/>
        <ListYourEvents />
      </View>
    </ThemedView>
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
