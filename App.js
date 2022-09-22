import { useState } from 'react';
import {
  useFonts,
  Roboto_2Thin,
  Roboto_8700Black,
} from '@expo-google-fonts/roboto';
import AppLoading from 'expo-app-loading';
import { getAllUsers } from './src/controller/AuthController';
import Routes from './src/routes';
import AuthProvider from './src/services/AuthProvider';
import { storeData } from './src/services/localstorage';

export default function App() {
  let [loaded, setLoaded] = useState(false);

  //   useFonts({
  //   Roboto_2Thin,
  //   Roboto_8700Black,
  // });
  if (!loaded) {
    getAllUsers()
      .then((users) => {
        console.log(users);
        storeData('@users', users, (result) => {
          if (result === true) {
            console.log('Loadin data');
            setLoaded(true);

          }
        });
      })
      .catch((err) => console.log(err));
    return <AppLoading />;
  }
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}
