
import { StyleSheet, Text, View } from 'react-native';

import {
  useFonts,
  Roboto_100Thin,
  Roboto_100Thin_Italic,
  Roboto_300Light,
  Roboto_300Light_Italic,
  Roboto_400Regular,
  Roboto_400Regular_Italic,
  Roboto_500Medium,
  Roboto_500Medium_Italic,
  Roboto_700Bold,
  Roboto_700Bold_Italic,
  Roboto_900Black,
  Roboto_900Black_Italic,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import DetailClient from './src/screens/DetailClient';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Routes from './src/routes';
import AuthProvider from './src/services/AuthProvider';




export default function App() {
  const Stack = createNativeStackNavigator()

  let [loaded]= useFonts({
    Roboto_100Thin, Roboto_900Black,
  })
  if (!loaded){
    return <AppLoading/>
  }
  return (
  <AuthProvider>
    <Routes/>
  </AuthProvider>
  
  )}


