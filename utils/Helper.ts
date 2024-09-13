import AsyncStorage from "@react-native-async-storage/async-storage"
import { router } from 'expo-router';

export const Auth = {
    CheckAuth: async () => {
        try{
          const token = await AsyncStorage.getItem('token');
          if (!token) {
            router.replace('/login'); 
          }
        }catch(error){
          router.replace('/login')
        }
    }
} 