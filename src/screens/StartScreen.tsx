import React, { FC, useEffect } from 'react';
import { View } from 'react-native';
import { Background, CustomText } from '../components';
import { useAsyncStorage } from '../hooks';

interface Props {
  navigation: any;
}

const StartScreen: FC<Props> = ({ navigation }) => {
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
        <CustomText>Nice to meet you!</CustomText>
      </View>
    </Background>
  );
};
export default StartScreen;
