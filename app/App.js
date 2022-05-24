/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React ,{useState}from 'react';
import {NavigationContainer} from '@react-navigation/native';
import BottomTabNavigator from './navigator/Navigator';
import { CredentialsContext } from './context/StoredCredentials';
const App = () => {
  const [storedCredentials, setStoredCredentials] = useState("");
  return (
    <CredentialsContext.Provider
    value={{ storedCredentials, setStoredCredentials }}>
    <NavigationContainer>
      <BottomTabNavigator />
    </NavigationContainer>
    </CredentialsContext.Provider>
  );
};

export default App;
