import { useState } from "react";
import {
  useFonts,
  Roboto_100Thin,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";
import AppLoading from "expo-app-loading";
import { getAllData, getAllUsers } from "./src/controller/AuthController";
import Routes from "./src/routes";
import AuthProvider from "./src/services/AuthProvider";
import { storeData } from "./src/services/localstorage";

export default function App() {
  let [loaded, setLoaded] = useState(true);

  let [fontLoaded] = useFonts({
    Roboto_100Thin,
    Roboto_900Black,
  });
  if (!loaded && !fontLoaded) {
    return <AppLoading />;
  }
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
