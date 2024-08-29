import Ionicons from '@expo/vector-icons/Ionicons';
import { StyleSheet, Text, View, Image } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesomeTemplate } from '@/components/navigation/TabBarIcon';

export default function TabTwoScreen() {
  return (
    <ThemedView>
      <View style={styles.background_page}>
        <Text style={styles.text_title}>Leaderboard</Text>
        <View style={styles.info_point}>
          <View style={{ flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 25, color: 'white', fontWeight: '600' }}>4</Text>
              </View>
              <View>
                <Text style={{ fontSize: 14, color: 'white' }}>Level</Text>
              </View>
          </View>
          <View style={{ borderLeftColor: 'rgba(255, 255, 255, 0.33)', borderLeftWidth: 1, paddingHorizontal: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <View style={styles.circle}>
                  <Text style={styles.letter}>P</Text>
                </View>
                <Text style={styles.header2}>3230</Text>
              </View>
              <View>
                <Text style={styles.header3}>Total Points</Text>
              </View>
          </View>
          <View style={{ borderLeftColor: 'rgba(255, 255, 255, 0.33)', borderLeftWidth: 1, paddingHorizontal: 15 }}>
              <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
                <View style={styles.circle}>
                  <FontAwesomeTemplate name={'users'} color={'#FFFFFF'} size={10}/>
                </View>
                <Text style={styles.header2}>20</Text>
              </View>
              <View>
                <Text style={styles.header3}>Friends</Text>
              </View>
          </View>
        </View>
      </View>
      <View style={styles.container}>
        <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 17 }}>
          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ position: 'absolute', zIndex: 100, top: -26 }}>
              <Image
                source={require('../../assets/images/profile.jpg')} 
                style={styles.image}
              />
            </View>
            <View style={styles.podium2}>
              <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 17 }}>
                <Text style={{ color: 'white', fontWeight: '200' }}>ivanfabs</Text>
                <Text style={{ fontSize: 27, fontWeight: '600', color: 'white' }}>2</Text>
              </View>
              <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>3000 pts</Text>
            </View>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <View style={{ position: 'absolute', zIndex: 100, top: -35 }}>
            <Image
              source={require('../../assets/images/profile.jpg')} 
              style={styles.image}
            />
          </View>
          <View style={styles.podium1}>
            <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 17 }}>
              <Text style={{ color: 'white', fontWeight: '200' }}>ivanfabs</Text>
              <Text style={{ fontSize: 27, fontWeight: '600', color: 'white' }}>1</Text>
            </View>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>3230 pts</Text>
          </View>
          </View>

          <View style={{ flexDirection: 'column', alignItems: 'center' }}>
          <View style={{ position: 'absolute', zIndex: 100, top: -16 }}>
            <Image
              source={require('../../assets/images/profile.jpg')} 
              style={styles.image}
            />
          </View>
          <View style={styles.podium3}>
            <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 17 }}>
              <Text style={{ color: 'white', fontWeight: '200' }}>ivanfabs</Text>
              <Text style={{ fontSize: 27, fontWeight: '600', color: 'white' }}>3</Text>
            </View>
            <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>2820 pts</Text>
          </View>
          </View>
        </View>
        <View style={styles.leaderboard_container}>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 7 }}>
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#7E7E7E' }}>01</Text>
              <Image
                source={require('../../assets/images/profile.jpg')} 
                style={styles.image}
              />
              <View>
                <Text style={{ fontSize: 16, fontWeight: '500', color: '#222222' }}>Ivan Fabriano</Text>
                <Text style={{ fontSize: 14, color: '#7E7E7E' }}>@ivanfabs</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
              <Text style={{ fontSize: 20, fontWeight: '600',color: '#7E7E7E' }}>3230</Text>
              <Text style={{ fontSize: 16, fontWeight: '600',color: '#7E7E7E' }}>pts</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 7 }}>
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#7E7E7E' }}>01</Text>
              <Image
                source={require('../../assets/images/profile.jpg')} 
                style={styles.image}
              />
              <View>
                <Text style={{ fontSize: 16, fontWeight: '500', color: '#222222' }}>Ivan Fabriano</Text>
                <Text style={{ fontSize: 14, color: '#7E7E7E' }}>@ivanfabs</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
              <Text style={{ fontSize: 20, fontWeight: '600',color: '#7E7E7E' }}>3230</Text>
              <Text style={{ fontSize: 16, fontWeight: '600',color: '#7E7E7E' }}>pts</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 7 }}>
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#7E7E7E' }}>01</Text>
              <Image
                source={require('../../assets/images/profile.jpg')} 
                style={styles.image}
              />
              <View>
                <Text style={{ fontSize: 16, fontWeight: '500', color: '#222222' }}>Ivan Fabriano</Text>
                <Text style={{ fontSize: 14, color: '#7E7E7E' }}>@ivanfabs</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
              <Text style={{ fontSize: 20, fontWeight: '600',color: '#7E7E7E' }}>3230</Text>
              <Text style={{ fontSize: 16, fontWeight: '600',color: '#7E7E7E' }}>pts</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 7 }}>
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#7E7E7E' }}>01</Text>
              <Image
                source={require('../../assets/images/profile.jpg')} 
                style={styles.image}
              />
              <View>
                <Text style={{ fontSize: 16, fontWeight: '500', color: '#222222' }}>Ivan Fabriano</Text>
                <Text style={{ fontSize: 14, color: '#7E7E7E' }}>@ivanfabs</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
              <Text style={{ fontSize: 20, fontWeight: '600',color: '#7E7E7E' }}>3230</Text>
              <Text style={{ fontSize: 16, fontWeight: '600',color: '#7E7E7E' }}>pts</Text>
            </View>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 7 }}>
            <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
              <Text style={{ fontSize: 20, fontWeight: '600', color: '#7E7E7E' }}>01</Text>
              <Image
                source={require('../../assets/images/profile.jpg')} 
                style={styles.image}
              />
              <View>
                <Text style={{ fontSize: 16, fontWeight: '500', color: '#222222' }}>Ivan Fabriano</Text>
                <Text style={{ fontSize: 14, color: '#7E7E7E' }}>@ivanfabs</Text>
              </View>
            </View>
            <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
              <Text style={{ fontSize: 20, fontWeight: '600',color: '#7E7E7E' }}>3230</Text>
              <Text style={{ fontSize: 16, fontWeight: '600',color: '#7E7E7E' }}>pts</Text>
            </View>
          </View>
        </View>
      </View>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  background_page: {
    backgroundColor: '#027FB9',
    height: 400
  },
  text_title: {
    marginTop: 50, 
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '600',
    color: 'white'
  },
  info_point: {
    flexDirection: 'row',
    backgroundColor: 'rgba(255, 255, 255, 0.33)', 
    width: 'auto',
    borderRadius: 7,
    padding: 10,
    gap: 20,
    marginHorizontal: 30,
    justifyContent: 'center',
    marginTop: 20
  },
  header2: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white'
  },
  header3: {
    fontSize: 16,
    color: 'white'
  },
  circle: {
    width: 20, 
    height: 20,
    borderRadius: 50, 
    backgroundColor: '#FF7F3E', 
    justifyContent: 'center', 
    alignItems: 'center'
  },
  letter: {
    fontSize: 12, 
    fontWeight: 'bold',
    color: '#FFFFFF'
  },
  container: {
    position: 'absolute',
    top: '60%',
    width: '100%',
    height: '130%'
  },
  leaderboard_container: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20, 
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginHorizontal: 20,
    height: '100%'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 50,
  },
  podium1: {
    backgroundColor: '#FF7F3E',
    width: 70,
    height: 120,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
  },
  podium2: {
    backgroundColor: '#48CAE4',
    width: 70,
    height: 110,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 10
  },
  podium3: {
    backgroundColor: '#00B4D7',
    width: 70,
    height: 100,
    flexDirection: 'column',
    justifyContent: 'space-between',
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginTop: 20
  }
});
