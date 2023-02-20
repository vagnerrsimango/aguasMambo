import React from "react";
import LoginScreen from "../screens/LoginScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import UpdateScreen from "../screens/UpdateScreen";

const AuthRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        options={{ headerShown: false }}
        component={LoginScreen}
      />
      <Stack.Screen
        name="UpdateScreen"
        options={{ headerShown: false }}
        component={UpdateScreen}
      />
    </Stack.Navigator>
  );
};

export default AuthRoutes;
