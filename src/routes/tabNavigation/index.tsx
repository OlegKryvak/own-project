import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import * as React from 'react';
import { settingsSelector } from '../../store/reducers/settings';
import { theme, verticalScale } from '../../styles';
import { useAppSelector } from '../../store/hooks';
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
import { useTranslation } from 'react-i18next';

const Tab = createBottomTabNavigator();

const MainContainer = () => {
  const { themeMode } = useAppSelector(settingsSelector);
  const { t } = useTranslation();
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
                  ? themeMode === 'Light'
                    ? theme.colors.lightGreen
                    : theme.colors.darkBackgroundColor
                  : themeMode === 'Light'
                  ? theme.colors.primaryContainer
                  : theme.colors.darkSecondary
              }
            />
          );
        },
        tabBarStyle: {
          backgroundColor:
            themeMode === 'Light'
              ? theme.colors.primary
              : theme.colors.white,
          height: verticalScale(85),
          paddingTop: verticalScale(2),
          alignItems: 'center'
        },
        tabBarLabelStyle: {
          fontWeight: '900',
          fontSize: 14
        },
        tabBarActiveTintColor:
          themeMode === 'Light'
            ? theme.colors.lightGreen
            : theme.colors.darkBackgroundColor,
        tabBarInactiveTintColor:
          themeMode === 'Light'
            ? theme.colors.primaryContainer
            : theme.colors.darkSecondary
      })}
    >
      <Tab.Screen
        name={t(HOME)}
        component={HomeScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={t(MENU)}
        component={MenuScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={t(SETTINGS)}
        component={SettingsScreen}
        options={{ headerShown: false }}
      />
      <Tab.Screen
        name={t(PROFILE)}
        component={ProfileScreen}
        options={{ headerShown: false }}
      />
    </Tab.Navigator>
  );
};

export default MainContainer;
