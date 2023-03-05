import { useNavigation } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import React, { FC, useCallback } from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text } from 'react-native-paper';
import { NavigationProps } from '../types/navigation';
import BackButton from './BackButton';
import {
  boxShadow,
  FONT_FAMILY,
  scaleFont,
  SCALE_20,
  SCALE_26,
  SCALE_30,
  SCALE_36,
  theme,
  WINDOW_WIDTH
} from '../styles';

interface Props {
  headline: string;
  rightIcon?: string | undefined;
}

const TopBar: FC<Props> = ({ headline, rightIcon }) => {
  const navigation = useNavigation<NavigationProps>();
  const navigateHandler = useCallback(() => {
    navigation.goBack();
  }, []);
  return (
    <View style={styles.container}>
      <BackButton goBack={navigateHandler} />
      <Text style={[styles.text, boxShadow(theme.colors.secondary)]}>{headline}</Text>
      <TouchableOpacity style={styles.rightIcon}>
        {rightIcon && (
          <Ionicons
            name={rightIcon}
            size={30}
            color={theme.colors.primary}
          />
        )}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH,
    marginTop: SCALE_26,
    flexDirection: 'row',
    alignItems: 'center',
    height: SCALE_36,
    paddingHorizontal: SCALE_20,
    justifyContent: 'space-between'
  },
  text: {
    fontFamily: FONT_FAMILY,
    fontSize: scaleFont(20),
    fontWeight: '800',
    color: theme.colors.secondary
  },
  rightIcon: {
    width: SCALE_30
  }
});

export default TopBar;
