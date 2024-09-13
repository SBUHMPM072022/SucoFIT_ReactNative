import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { useRouter } from 'expo-router';

const ProtectedRoute = ({ children }: any) => {
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const token = await SecureStore.getItemAsync('token');
        if (!token) {
          router.replace('/login'); 
        } else {
          setLoading(false); 
        }
      } catch (error) {
        console.error('Failed to check authentication:', error);
        router.replace('/login'); 
      }
    };

    checkAuth();
  }, [router]);

  if (loading) {
    return (
      <View>
        <Text>Loading...</Text> {/* Atau spinner loading */}
      </View>
    );
  }

  return children;
};

export default ProtectedRoute;
