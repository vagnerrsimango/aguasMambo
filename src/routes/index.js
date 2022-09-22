import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import MainRoutes from './MainRoutes';
import AuthRoutes from './AuthRoutes';
import { UserContext } from '../services/Context';

const Routes = () => {
  const { user } = useContext(UserContext);

  return (
    <NavigationContainer>
      {user === null ? <AuthRoutes /> : <MainRoutes />}
    </NavigationContainer>
  );
};

export default Routes;
