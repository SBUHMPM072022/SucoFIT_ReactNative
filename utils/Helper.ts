import AsyncStorage from "@react-native-async-storage/async-storage"
import { router } from 'expo-router';
import { jwtDecode } from "jwt-decode";
import haversine from 'haversine';

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
    },
} 

export const GeoLocation = {
  CheckProximityInRange: ({latitude_source, longitude_source, latitude_person, longitude_person, threshold}: any) => {
    const source = {
      latitude: latitude_source,
      longitude: longitude_source
    }

    const person = {
      latitude: latitude_person,
      longitude: longitude_person
    }

    const distance = haversine(source, person, { unit: 'meter' });

    if( distance <= threshold) return true
    return false
  }
}