import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

//import all screen components
import { AppStackParamList } from '../types/navigation';
import MainContainer from './tabNavigation';
import {
  ActiveSessionsScreen,
  DepositScreen,
  FavouriteScreen,
  HistoryStatisticScreen,
  HomeScreen,
  LoginScreen,
  MyBankCardsScreen,
  MyElectronicDevicesScreen,
  NearestStationsScreen,
  PaymentArchiveScreen,
  PersonalInfoScreen,
  QRCodeScannerScreen,
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
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen
          name="ResetPasswordScreen"
          component={ResetPasswordScreen}
        />
        <Stack.Screen
          name="MainContainer"
          component={MainContainer}
        />
        <Stack.Screen
          name="DepositScreen"
          component={DepositScreen}
        />
        <Stack.Screen
          name="MyBankCardsScreen"
          component={MyBankCardsScreen}
        />
        <Stack.Screen
          name="MyElectronicDevicesScreen"
          component={MyElectronicDevicesScreen}
        />
        <Stack.Screen
          name="PaymentArchiveScreen"
          component={PaymentArchiveScreen}
        />
        <Stack.Screen
          name="PersonalInfoScreen"
          component={PersonalInfoScreen}
        />
        <Stack.Screen
          name="FavouriteScreen"
          component={FavouriteScreen}
        />
        <Stack.Screen
          name="NearestStationsScreen"
          component={NearestStationsScreen}
        />
        <Stack.Screen
          name="ActiveSessionsScreen"
          component={ActiveSessionsScreen}
        />
        <Stack.Screen
          name="HistoryStatisticScreen"
          component={HistoryStatisticScreen}
        />
        <Stack.Screen
          name="QRCodeScannerScreen"
          component={QRCodeScannerScreen}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
