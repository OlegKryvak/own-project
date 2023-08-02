import React, { FC, useEffect, useLayoutEffect } from 'react';
import { View } from 'react-native';
import { settingsSelector } from '../store/reducers/settings';
import { Background, CustomText } from '../components';
import { useAppSelector } from '../store/hooks';
import { useAsyncStorage } from '../hooks';
import { theme } from '../styles';
import { useTranslation } from 'react-i18next';
import i18n from '../localization';

interface Props {
  navigation: any;
}

const StartScreen: FC<Props> = ({ navigation }) => {
  const { themeMode, language } = useAppSelector(settingsSelector);

  const { t } = useTranslation();

  const [email] = useAsyncStorage('@email');
  useLayoutEffect(() => {
    i18n.changeLanguage(
      language === 'English'
        ? 'en'
        : language === 'Ukrainian'
        ? 'uk'
        : 'es'
    );
  }, []);
  useEffect(() => {
    setTimeout(() => {
      navigation.reset({
        index: 0,
        routes: email
          ? [{ name: 'MainContainer' }]
          : [{ name: 'LoginScreen' }]
      });
    }, 2000);
  }, [email]);
  return (
    <Background>
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <CustomText
          fontSize={25}
          color={
            themeMode === 'Light'
              ? theme.colors.primary
              : theme.colors.darkPrimary
          }
        >
          {t('niceToMeetYou')}
        </CustomText>
      </View>
    </Background>
  );
};
export default StartScreen;
