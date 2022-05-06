import React from 'react'
import DataCollection from '../screens/DataCollection'
import DetailClient from '../screens/DetailClient'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const MainRoutes = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name='DataCollection' options={{headerShown: false}} component={DataCollection}/>
      <Stack.Screen name='DetailClient' options={{headerShown: false}} component={DetailClient}/>
    </Stack.Navigator>
  )
}

export default MainRoutes
