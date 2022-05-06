import React from 'react'
import LoginScreen from '../screens/LoginScreen'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const AuthRoutes = () => {
  const Stack = createNativeStackNavigator()
  return (
    <Stack.Navigator>
      <Stack.Screen name='Login' options={{headerShown: false}} component={LoginScreen}/>
    </Stack.Navigator>
  )
}

export default AuthRoutes

