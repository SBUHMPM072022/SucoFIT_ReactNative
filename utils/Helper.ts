import AsyncStorage from "@react-native-async-storage/async-storage"
import { router } from 'expo-router';
import { jwtDecode } from "jwt-decode";

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
    },
    JWTDecoded: async (token: string) => {
      try{
        const decoded = jwtDecode(token);
        return decoded
      }catch(error){
        console.log(error);
        
      }
    }
} 