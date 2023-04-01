import { StyleSheet, View } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { settingsSelector } from '../store/reducers/settings';
import { WINDOW_HEIGHT, theme } from '../styles';
import { useAppSelector } from '../store/hooks';

interface Props {
  children: ReactNode;
}

const Background: FC<Props> = ({ children }) => {
  const { themeMode } = useAppSelector(settingsSelector);

  return (
    <View
      style={[
        styles.background,
        {
          backgroundColor:
            themeMode === 'Light'
              ? theme.colors.primaryContainer
              : theme.colors.darkBackgroundColor
        }
      ]}
    >
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: WINDOW_HEIGHT,
    width: '100%',
    padding: 20,
    alignSelf: 'center',
    alignItems: 'center'
  }
});
export default Background;
