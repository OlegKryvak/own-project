import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

//import all screen components
import { AppStackParamList } from '../types/navigation';
import {
  HomeScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  StartScreen
} from '../screens';
import MainContainer from './tabNavigation';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const AppStackRoutes = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="StartScreen"
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen
          name="RegisterScreen"
          component={RegisterScreen}
        />
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
        <Stack.Screen
          name="MainContainer"
          component={MainContainer}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
