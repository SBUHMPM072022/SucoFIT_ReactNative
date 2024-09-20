import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView, RefreshControl, FlatList, Dimensions } from 'react-native';
import { ThemedView } from '@/components/ThemedView';
import { FontAwesomeTemplate } from '@/components/navigation/TabBarIcon';
import * as SecureStore from 'expo-secure-store';
import { useCallback, useEffect, useState } from 'react';
import { Auth } from '@/utils/Helper';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';

const { height } = Dimensions.get('window');

export default function TabTwoScreen() {
  const [leaderboardData, setLeaderboardData]: any = useState([]);
  const [leaderboardLoading, setLeaderboardLoading] = useState(true);
  const [leaderboardError, setLeaderboardError] = useState(null);
  const [userId, setUserId] = useState(null);
  const [userPoint, setUserPoint] = useState(0);
  const [refreshing, setRefreshing] = useState(false);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      getLeaderboardList();
      setRefreshing(false);
    }, 2000);
  },[])

  const getLeaderboardList = async () => {
    try{
      const response = await axios.get('http://192.168.50.17:4006/api/v1/web/leaderboard');
      const data = response.data.data;

      setLeaderboardData(data)
    }catch(error: any){
      setLeaderboardError(error)
    }finally{
      setLeaderboardLoading(false)
    }
  }

  const getUserPoint = async () => {
    try{
      const response = await axios.get(`http://192.168.50.17:4006/api/v1/web/user/get-point/${userId}`);
      const data = response.data.data;

      setUserPoint(data.total_point);
    }catch(error){
      console.log(error);
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

  useEffect(() => {
    Auth.CheckAuth();
    getLeaderboardList();
    getUserData();
  },[]);

  useEffect(() => {
    if(userId) getUserPoint();
  }, [userId])

  return (
    <ThemedView style={{ position: 'relative' }}>
      <View style={{ backgroundColor: '#027FB9' }}>
        <View style={{ position: 'absolute', width: '100%' }}>
          <Text style={styles.text_title}>Leaderboard</Text>
          <View style={styles.info_point}>
          <View style={{ flexDirection: 'column' ,justifyContent: 'center', alignItems: 'center' }}>
              <View>
                <Text style={{ fontSize: 25, color: 'white', fontWeight: '600' }}>1</Text>
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
                <Text style={styles.header2}>{userPoint}</Text>
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
                <Text style={styles.header2}>0</Text>
              </View>
              <View>
                <Text style={styles.header3}>Friends</Text>
              </View>
          </View>
        </View>
        </View>
        <View style={{ height: height }}>
          <View style={styles.container}>
          <View style={{ flexDirection: 'row', justifyContent: 'center', gap: 17 }}>
            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
              <View style={{ position: 'absolute', zIndex: 100, top: -26 }}>
                <Image
                  source={{ uri: `http://192.168.50.17:4006/${leaderboardData[1]?leaderboardData[1].profile_picture: ''}` }}
                  style={styles.image}
                />
              </View>
              <View style={styles.podium2}>
                <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 17 }}>
                  <View style={{ width: 60 }}>
                    <Text style={{ color: 'white', fontWeight: '200' }} ellipsizeMode='tail' numberOfLines={1}>@{leaderboardData[1]?leaderboardData[1].username: ''}</Text>
                  </View>
                  <Text style={{ fontSize: 27, fontWeight: '600', color: 'white' }}>2</Text>
                </View>
                <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>{leaderboardData[1]?leaderboardData[1].total_point:0} pts</Text>
              </View>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ position: 'absolute', zIndex: 100, top: -35 }}>
              <Image
                  source={{ uri: `http://192.168.50.17:4006/${leaderboardData[0]?leaderboardData[0].profile_picture: ''}` }}
                  style={styles.image}
              />
            </View>
            <View style={styles.podium1}>
              <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 17 }}>
                <View style={{ width: 60 }}>
                  <Text style={{ color: 'white', fontWeight: '200' }} numberOfLines={1} ellipsizeMode='tail'>@{leaderboardData[0]?leaderboardData[0].username: ''}</Text>
                </View>
                <Text style={{ fontSize: 27, fontWeight: '600', color: 'white' }}>1</Text>
              </View>
              <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>{leaderboardData[0]?leaderboardData[0].total_point:0} pts</Text>
            </View>
            </View>

            <View style={{ flexDirection: 'column', alignItems: 'center' }}>
            <View style={{ position: 'absolute', zIndex: 100, top: -16 }}>
              <Image
                  source={{ uri: `http://192.168.50.17:4006/${leaderboardData[2]?leaderboardData[2].profile_picture: ''}` }}
                  style={styles.image}
              />
            </View>
            <View style={styles.podium3}>
              <View style={{ flexDirection: 'column', alignItems: 'center', paddingTop: 17 }}>
                <View style={{ width: 60 }}>
                  <Text style={{ color: 'white', fontWeight: '200' }} numberOfLines={1} ellipsizeMode='tail'>@{leaderboardData[2]?leaderboardData[2].username: ''}</Text>
                </View>
                <Text style={{ fontSize: 27, fontWeight: '600', color: 'white' }}>3</Text>
              </View>
              <Text style={{ color: 'white', textAlign: 'center', fontWeight: '600' }}>{leaderboardData[2]?leaderboardData[2].total_point:0} pts</Text>
            </View>
            </View>
          </View>
            <FlatList
              style={styles.leaderboard_container}
              data={leaderboardData}
              showsVerticalScrollIndicator={false}
              keyExtractor={(item: any, index: any) => index.toString()}
              renderItem={({ item, index }: any) => (
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 7 }}>
                  <View style={{ flexDirection: 'row', gap: 10, alignItems: 'center' }}>
                    <Text style={{ fontSize: 20, fontWeight: '600', color: '#7E7E7E' }}>
                      {(index+1) > 9 ? (index+1) : '0' + (index+1)}
                    </Text>
                    <Image
                      source={{ uri: `http://192.168.50.17:4006/${item.profile_picture}` }}
                      style={styles.image}
                    />
                    <View>
                      <Text style={{ fontSize: 16, fontWeight: '500', color: '#222222' }}>{item.fullname}</Text>
                      <Text style={{ fontSize: 14, color: '#7E7E7E' }}>@{item.username}</Text>
                    </View>
                  </View>
                  <View style={{ flexDirection: 'row', alignItems: 'flex-end', gap: 4 }}>
                    <Text style={{ fontSize: 20, fontWeight: '600',color: '#7E7E7E' }}>{item.total_point}</Text>
                    <Text style={{ fontSize: 16, fontWeight: '600',color: '#7E7E7E' }}>pts</Text>
                  </View>
                </View>
              )}
              refreshControl={
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
            />
          </View>
        </View>
      </View>
      {/* <View style={styles.background_page}>
        <Text style={styles.text_title}>Leaderboard</Text>

      </View> */}

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
    bottom: 30,
    width: '100%',
    height: 550,
  },
  leaderboard_container: {
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20, 
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    marginHorizontal: 20,
    height: 500,
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
