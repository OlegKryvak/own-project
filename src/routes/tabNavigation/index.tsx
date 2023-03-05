import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import { theme } from '../../styles';
import {
  HomeScreen,
  MenuScreen,
  ProfileScreen,
  SettingsScreen
} from '../../screens';
import {
  HOME,
  MENU,
  PROFILE,
  SETTINGS,
  switchBottomIcon
} from '../../utils';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  return (
    <Tab.Navigator
      initialRouteName={HOME}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          const rn = route.name;
          const iconName = switchBottomIcon(rn, focused);

          return (
            <Ionicons
              name={iconName}
              size={30}
              color={
                focused
                  ? theme.colors.lightGreen
                  : theme.colors.primaryContainer
              }
            />
          );
        },
        tabBarStyle: {
          backgroundColor: theme.colors.primary,
          borderRadius: 12,
          height: 85,
          paddingTop: 5,
          alignItems: 'center',
        },
        tabBarLabelStyle: {
          fontWeight: '900',
          fontSize: 14,
        },
        tabBarActiveTintColor: theme.colors.lightGreen,
        tabBarInactiveTintColor: theme.colors.primaryContainer,
      })}
    >
      <Tab.Screen
        name={HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={MENU}
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={SETTINGS}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={PROFILE}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default MainContainer;
