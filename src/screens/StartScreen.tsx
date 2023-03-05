import React, { FC, useEffect } from 'react';
import { Background, Header } from '../components';
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
      <Header>Nice to meet you!</Header>
    </Background>
  );
};
export default StartScreen;
