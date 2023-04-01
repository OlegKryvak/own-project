import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import React, { FC, useCallback } from 'react';
import { INavigationCard } from '../types/components';
import { NavigationProps } from '../types/navigation';
import { signOut } from '../utils';
import {
  FONT_FAMILY,
  scaleFont,
  SCALE_10,
  boxShadow,
  SCALE_4,
  theme
} from '../styles';
import { useAppSelector } from '../store/hooks';
import { settingsSelector } from '../store/reducers/settings';

interface Props extends INavigationCard {}

const NavigationCard: FC<Props> = ({ text, icon, navigateTo }) => {
  const navigation = useNavigation<NavigationProps>();
  const { themeMode } = useAppSelector(settingsSelector);

  const navigateHandler = useCallback(() => {
    if (navigateTo === 'LoginScreen') {
      signOut(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LoginScreen' }]
        });
      });
    } else {
      navigation.navigate(navigateTo);
    }
  }, []);
  return (
    <TouchableOpacity
      style={[
        styles.container,
        boxShadow(theme.colors.primary),
        {
          backgroundColor:
            themeMode === 'Light'
              ? theme.colors.primaryContainer
              : theme.colors.darkSecondary,
          borderColor:
            themeMode === 'Light'
              ? theme.colors.primary
              : theme.colors.white
        }
      ]}
      onPress={navigateHandler}
    >
      <FontAwesome5
        name={icon}
        size={30}
        color={
          themeMode === 'Light'
            ? theme.colors.primary
            : theme.colors.darkBackgroundColor
        }
      />
      <Text
        style={[
          styles.text,
          boxShadow(theme.colors.primary),
          {
            color:
              themeMode === 'Light'
                ? theme.colors.primary
                : theme.colors.darkBackgroundColor
          }
        ]}
      >
        {text}
      </Text>
      <Ionicons
        name="md-chevron-forward-outline"
        size={30}
        color={
          themeMode === 'Light'
            ? theme.colors.primary
            : theme.colors.darkBackgroundColor
        }
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    aspectRatio: 5,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: SCALE_4,
    paddingHorizontal: SCALE_10,
    borderWidth: 2
  },
  text: {
    fontSize: scaleFont(18),
    fontFamily: FONT_FAMILY,
    fontWeight: '700'
  }
});

export default NavigationCard;
