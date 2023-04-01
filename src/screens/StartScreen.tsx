import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { settingsSelector } from '../store/reducers/settings';
import { Background, CustomText } from '../components';
import { useAppSelector } from '../store/hooks';
import { useAsyncStorage } from '../hooks';
import { theme } from '../styles';

interface Props {
  navigation: any;
}

const StartScreen: FC<Props> = ({ navigation }) => {
  const { themeMode } = useAppSelector(settingsSelector);
  const [email] = useAsyncStorage('@email');

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
        <CustomText fontSize={30} color={themeMode === 'Light'
              ? theme.colors.primary
              : theme.colors.darkPrimary}>Nice to meet you!</CustomText>
      </View>
    </Background>
  );
};
export default StartScreen;
