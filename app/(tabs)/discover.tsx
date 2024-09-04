import { Image, StyleSheet, Platform, View } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { HeaderPage } from '@/components/HeaderPage';
import { ListExercises } from '@/components/ListExercises';

export default function HomeScreen() {

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

  return (
    <ThemedView style={{ flex: 1 }}>
      <HeaderPage headerTitle='Discover' />
      <View style={{ marginTop: 90, backgroundColor: '#F8F8F8', paddingHorizontal: 20 }}>
        <ListExercises stories={stories} categories={categories}/>
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
