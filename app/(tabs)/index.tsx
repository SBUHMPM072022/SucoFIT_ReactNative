import { CardEventItem } from '@/components/CardEventItem';
import { CardRecord } from '@/components/CardRecord';
import { HeaderPage } from '@/components/HeaderPage';
import { StoryBar } from '@/components/StoryBar';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { Auth } from '@/utils/Helper';
import { useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

export default function HomeScreen() {
  const handleStoryPress = (story: any) => {
    console.log('Cerita diklik:', story);
  };

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
    Auth.CheckAuth()
  },[]);
  

  return (
    <ThemedView style={{ flex: 1 }}>
      <HeaderPage headerTitle='Home' />
      <View style={{ marginTop: 90, backgroundColor: '#F8F8F8', paddingHorizontal: 20 }}>
        <StoryBar stories={stories} onStoryPress={handleStoryPress} />
        <Text style={styles.sectionTitle}>Your Record</Text>
        <CardRecord />
        <Text style={styles.sectionTitle}>Hot Events</Text>
        <CardEventItem />
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

