import { Tabs } from 'expo-router';
import React, { useEffect, useState } from 'react';

import { FontAwesomeTemplate, IoniconTemplate, ProfileTemplate } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function TabLayout() {
  const colorScheme = useColorScheme();
  const [profilePicture, setProfilePicture] = useState('');

  const getProfilePicture = async () => {
    try{
      const userProfile: any = await AsyncStorage.getItem('profile_picture');
      
      if(!userProfile) setProfilePicture(userProfile);
    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    getProfilePicture();
  }, [])

  return (
    <Tabs
      screenOptions={{
        // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        tabBarActiveTintColor: Colors['light'].tint,
        headerShown: false,
        tabBarStyle: {
          height: 65
        }
      }}>
      <Tabs.Screen
        name="index"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <IoniconTemplate name={focused ? 'home' : 'home-outline'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="leaderboard"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesomeTemplate name={focused ? 'ranking-star' : 'ranking-star'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="discover"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesomeTemplate name={focused ? 'record-vinyl' : 'record-vinyl'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="map"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <FontAwesomeTemplate name={focused ? 'map-location-dot' : 'map-location-dot'} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          title: '',
          tabBarIcon: ({ color, focused }) => (
            <ProfileTemplate userProfile={profilePicture}/>
          ),
        }}
      />
    </Tabs>
  );
}
