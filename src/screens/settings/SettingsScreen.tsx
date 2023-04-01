import { ScrollView, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import SettingsRadioBtn from './SettingsRadioBtn';
import SettingsTogglers from './SettingsTogglers';
import { languages, themes } from '../../utils';
import { Background } from '../../components';
import {
  setLanguage,
  setTheme,
  settingsSelector
} from '../../store/reducers/settings';

interface Props {
  navigation: any;
}

const SettingsScreen: FC<Props> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const { theme, language } = useAppSelector(settingsSelector);

  const changeLanguageHandler = e => {
    dispatch(setLanguage(e.label));
  };
  const changeThemeHandler = e => {
    dispatch(setTheme(e.label));
  };

  return (
    <Background>
      <ScrollView
        contentContainerStyle={{ alignItems: 'center' }}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        style={styles.container}
      >
        <SettingsRadioBtn
          initial={
            language === 'English'
              ? 1
              : language === 'Ukrainian'
              ? 2
              : 3
          }
          data={languages}
          title="Language"
          onChange={changeLanguageHandler}
        />
        <SettingsRadioBtn
          initial={theme === 'Light' ? 1 : 2}
          data={themes}
          title="Theme"
          onChange={changeThemeHandler}
        />
        <SettingsTogglers title="Message types" />
      </ScrollView>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 30,
    height: '100%'
  }
});
export default SettingsScreen;
