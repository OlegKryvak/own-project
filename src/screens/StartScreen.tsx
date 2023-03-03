import React, { FC, useEffect } from 'react';
import Background from '../components/Background';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

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
      <Header>Hello</Header>
    </Background>
  );
};
export default StartScreen;
