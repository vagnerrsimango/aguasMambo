import React from "react";
import DataCollection from "../screens/DataCollection";
import DetailClient from "../screens/DetailClient";
import SearchFile from "../screens/SearchFile";
import AdminDash from "../screens/AdminDash";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { TextInput } from "react-native-web";

const AgentRoutes = () => {
  const Stack = createNativeStackNavigator();
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="DataCollection"
        options={{ headerShown: false }}
        component={DataCollection}
      />
      <Stack.Screen
        name="DetailClient"
        options={{ headerShown: false }}
        component={DetailClient}
      />
      <Stack.Screen
        name="SearchFile"
        options={{ headerShown: false }}
        component={SearchFile}
      />
    </Stack.Navigator>
  );
};

export default AgentRoutes;
