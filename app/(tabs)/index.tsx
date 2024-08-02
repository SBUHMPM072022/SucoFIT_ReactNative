import { ThemedText } from '@/components/ThemedText';
import { View, Text, ScrollView, StyleSheet, FlatList } from 'react-native';

const data = Array.from({ length: 30 }, (_, index) => `Item ${index + 1}`);

export default function HomeScreen() {
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item}
      renderItem={({ item }) => (
        <View style={styles.itemContainer}>
          <Text style={styles.itemText}>{item}</Text>
        </View>
      )}
      ListHeaderComponent={
        <View style={styles.stickyHeader}>
          <Text style={styles.headerText}>Sticky Header</Text>
        </View>
      }
      stickyHeaderIndices={[0]}
    />
  );
}

const styles = StyleSheet.create({
  stickyHeader: {
    backgroundColor: '#4CAF50', // Warna background header
    padding: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#fff', // Warna teks header
  },
  itemContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  itemText: {
    fontSize: 16,
  },
});

