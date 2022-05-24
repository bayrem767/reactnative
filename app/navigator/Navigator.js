import React,{useContext, useState} from 'react';
import {Text} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  ExerciseDetailsScreen,
  ExerciseHomeScreen,
  SettingsScreen,
} from '../screens';
import FontAwesome5Icons from 'react-native-vector-icons/FontAwesome5';
import {COLORS} from '../constants';
import about_us from '../screens/about_us';
import login from '../screens/login';
import register from '../screens/register';
import ResetPasswordScreen from '../screens/ResetPasswordScreen';
import TrainerHome from '../screens/TrainerHome';
import loginTrainer from '../screens/loginTrainer'
import loginClient from '../screens/loginClient';
import Account from '../screens/Account';
import TrainerCalendar from '../screens/TrainerCalendar'
import { CredentialsContext } from '../context/StoredCredentials';

const Stack = createStackNavigator();
const StackNavigator = () => {
  return (
    <Stack.Navigator initialRouteName={'ExercisesHomeScreen'} headerMode="none">
      <Stack.Screen name="ExercisesHomeScreen" component={ExerciseHomeScreen} />
      <Stack.Screen
        name="ExerciseDetailsScreen"
        component={ExerciseDetailsScreen}
      />
      <Stack.Screen
        name="TrainerHome"
        component={TrainerHome}
      />
      <Stack.Screen
        name="TrainerCalendar"
        component={TrainerCalendar}
      />
      <Stack.Screen
        name="register"
        component={register}
      />
      <Stack.Screen
        name="login"
        component={login}
      />
      <Stack.Screen
        name="loginClient"
        component={loginClient}
      />
      <Stack.Screen
        name="loginTrainer"
        component={loginTrainer}
      />
         <Stack.Screen
        name="reset"
        component={ResetPasswordScreen}
      />
    </Stack.Navigator>
  );
};

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
  
  return (
 <CredentialsContext.Consumer>
   
    
     {({storedCredentials}) => (
       <Tab.Navigator
      tabBarOptions={{
        style: {
          height: 65,
        },
      }}
      initialRouteName="Home"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused}) => {
          const icons = {
            Home: 'home',
            about: 'info',
            Schedule: 'calendar-alt',
            contact: 'id-card',
            Account:'user',
            HomeTrainer:'home',
            TrainerCalendar:'TrainerCalendar',
          };
          return (
            <FontAwesome5Icons
              name={icons[route.name]}
              color={focused ? COLORS.accent : COLORS.black}
              style={{
                fontSize: 20,
                opacity: focused ? 1 : 0.5,
              }}
            />
          );
        },
        tabBarLabel: ({focused}) => {
          const labels = {
            Home: 'Home',
            about:'About Us',
            Schedule: 'Schedule',
            contact: 'Contact',
            Account: 'Account',
            HomeTrainer:'Home',
            TrainerCalendar:'TrainerCalendar',
          };

          return (
            <Text
              style={{
                color: focused ? COLORS.accent : COLORS.black,
                marginBottom: 8,
                opacity: focused ? 1 : 0.6,
                fontWeight: 'bold',
              }}>
              {labels[route.name]}
            </Text>
          );
        },
      })}>
     {storedCredentials.role == 'client' ? 
      <>
    <Tab.Screen name="Home" component={StackNavigator} />
      <Tab.Screen name="about" component={about_us} />
      <Tab.Screen name="Schedule" component={SettingsScreen} />
      <Tab.Screen name="Account" component={Account}/>
      </> 
      : 
      storedCredentials.role=='trainer' ?  
       <>
    <Tab.Screen name="TrainerHome" component={TrainerHome} />
    <Tab.Screen name="TrainerCalander" component={TrainerCalendar} />
    <Tab.Screen name="Account" component={Account}/>
    </> 
     : 
      <>
    <Tab.Screen name="Home" component={StackNavigator} />
    <Tab.Screen name="about" component={about_us} />
    <Tab.Screen name="Schedule" component={SettingsScreen} />
    </>}
    </Tab.Navigator>) 
    }
      
    
  </CredentialsContext.Consumer>
  );
};

export default BottomTabNavigator;