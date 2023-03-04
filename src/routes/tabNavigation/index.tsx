import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { theme } from '../../styles';
import {
  HomeScreen,
  ProfileScreen,
  SettingsScreen
} from '../../screens';
import {
  DETAILS,
  HOME,
  SETTINGS,
  switchBottomIcon
} from '../../utils';

const Tab = createBottomTabNavigator();

function MainContainer() {
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
                  ? theme.colors.primary
                  : theme.colors.secondary
              }
            />
          );
        },
        tabBarStyle: {
          backgroundColor: theme.colors.primaryContainer,
          borderRadius: 12,
          paddingTop: 10,
        }
      })}
    >
      <Tab.Screen
        name={HOME}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={DETAILS}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={SETTINGS}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
}

export default MainContainer;
