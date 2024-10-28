import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image} from 'react-native';

import logoImage from './assets/logo.app.png'
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
  <Image style={styles.logo} source={logoImage}/>
  <Text style={styles.titleText}>bem vindo ao app tea </Text>
      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
 logo: {
  height: 500,
  width: 1000,
},
 titleText:{},
 backgroundColor:'#fff'


});



