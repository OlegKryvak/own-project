import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

//import all screen components
import { AppStackParamList } from '../types/navigation';
import {
  DashboardScreen,
  LoginScreen,
  RegisterScreen,
  ResetPasswordScreen,
  StartScreen
} from '../screens';

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
        <Stack.Screen name="Dashboard" component={DashboardScreen} />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
