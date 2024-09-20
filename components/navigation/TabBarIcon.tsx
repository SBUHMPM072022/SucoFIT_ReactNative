// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/

import Ionicons from '@expo/vector-icons/Ionicons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { type IconProps } from '@expo/vector-icons/build/createIconSet';
import { type ComponentProps } from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { Feather } from '@expo/vector-icons';


export function IoniconTemplate({ style, ...rest }: IconProps<ComponentProps<typeof Ionicons>['name']>) {
  return <Ionicons size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export function FontAwesomeTemplate({ style, ...rest }: IconProps<ComponentProps<typeof FontAwesome6>['name']>) {
  return <FontAwesome6 size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export function FeatheTemplate({ style, ...rest }: IconProps<ComponentProps<typeof Feather>['name']>) {
  return <Feather size={28} style={[{ marginBottom: -3 }, style]} {...rest} />;
}

export function ProfileTemplate({userProfile, focused}: any) {

  return (
    <View style={styles.container}>
      <Image
        source={{ uri: `http://192.168.50.17:4006/${userProfile}` }}
        style={styles.image}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8
  },
  image: {
    width: 30,
    height: 30,
    borderRadius: 50,
  },
});
