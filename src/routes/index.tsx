import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
//import all screen components
import {navigationRef} from './RootNavigation';
import StartScreen from '../screens/StartScreen';
import LoginScreen from '../screens/auth/LoginScreen';
import RegisterScreen from '../screens/auth/RegisterScreen';
import Dashboard from '../screens/dashboard/DashboardScreen';
import ResetPasswordScreen from '../screens/auth/ResetPasswordScreen';
import { AppStackParamList } from '../types/navigation';

const Stack =  createNativeStackNavigator<AppStackParamList>();

export const AppStackRoutes = () => {
  return (
    <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName="StartScreen"
          screenOptions={{
            headerShown: false,
          }}
        >
          <Stack.Screen name="StartScreen" component={StartScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
          <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
          <Stack.Screen name="Dashboard" component={Dashboard} />
          <Stack.Screen
            name="ResetPasswordScreen"
            component={ResetPasswordScreen}
          />
        </Stack.Navigator>
    </NavigationContainer>
  );
};
