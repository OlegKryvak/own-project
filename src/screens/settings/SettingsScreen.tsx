import { ScrollView, StyleSheet } from 'react-native';
import React, { FC } from 'react';
import SettingsRadioBtn from './SettingsRadioBtn';
import SettingsTogglers from './SettingsTogglers';
import { languages, themes } from '../../utils';
import { Background } from '../../components';

interface Props {
  navigation: any;
}

const SettingsScreen: FC<Props> = ({ navigation }) => {
  const changeLanguageHandler = e => {
    console.log(e);
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
          data={languages}
          title="Language"
          onChange={changeLanguageHandler}
        />
        <SettingsRadioBtn
          data={themes}
          title="Theme"
          onChange={changeLanguageHandler}
        />
        <SettingsTogglers title='Message types'/>
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
