import React, { FC } from 'react';
import { Background } from '../../components';
import { useAsyncStorage } from '../../hooks';
import { Text } from 'react-native-paper';

interface Props {
  navigation: any;
}

const HomeScreen: FC<Props> = ({ navigation }) => {
  const [email] = useAsyncStorage('@email');
  return (
    <Background>


    </Background>
  );
};

export default HomeScreen;
