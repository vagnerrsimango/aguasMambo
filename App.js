import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import LoginScreen from './src/screens/LoginScreen';
import LoginScreen2 from './src/screens/LoginScreen2';
import DataCollection from './src/screens/DataCollection';
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


export default function App() {
  let [loaded]= useFonts({
    Roboto_100Thin, Roboto_900Black,
  })
  if (!loaded){
    return <AppLoading/>
  }
  return (
   <DetailClient/>
  )}


