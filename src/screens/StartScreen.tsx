import React, { FC, useEffect } from 'react';
import { Background, Header } from '../components';

interface Props {
  navigation: any;
}

const StartScreen: FC<Props> = ({ navigation }) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('LoginScreen');
    }, 2000);
  }, []);
  return (
    <Background>
      <Header>Nice to meet you!</Header>
    </Background>
  );
};
export default StartScreen;
