import ToggleSwitch from 'toggle-switch-react-native';
import { StyleSheet, View } from 'react-native';
import React, { FC, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { settingsSelector } from '../store/reducers/settings';
import { scaleFont, theme, WINDOW_WIDTH } from '../styles';
import CustomText from './CustomText';

interface Props {
  title: string;
  value: boolean;
  onChange: any;
}

const Toggler: FC<Props> = ({ title, value, onChange }) => {
  const dispatch = useAppDispatch();
  const { themeMode } = useAppSelector(settingsSelector);

  return (
    <View style={styles.container}>
      <View style={{ width: '70%' }}>
        <CustomText
          color={
            themeMode === 'Light'
              ? theme.colors.secondary
              : theme.colors.darkPrimary
          }
          fontWeight="700"
          fontSize={scaleFont(16)}
        >
          {title}
        </CustomText>
      </View>
      <ToggleSwitch
        isOn={value}
        onColor={theme.colors.white}
        offColor={theme.colors.secondary}
        thumbOnStyle={{
          backgroundColor:
            themeMode === 'Light'
              ? theme.colors.lightGreen
              : theme.colors.darkPrimary
        }}
        thumbOffStyle={{ backgroundColor: theme.colors.white }}
        size="medium"
        onToggle={() => dispatch(onChange(!value))}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH - 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4
  }
});
export default Toggler;
