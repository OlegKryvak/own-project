import React, { FC, useCallback } from 'react';
import { useAsyncStorage } from '../../hooks';
import { signOut } from '../../utils';
import {
  Background,
  Button,
  Header,
  Paragraph
} from '../../components';

interface Props {
  navigation: any;
}

const HomeScreen: FC<Props> = ({ navigation }) => {
  const [email] = useAsyncStorage('@email');
  const handleLogout = useCallback(() => {
    signOut(() => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'LoginScreen' }]
      });
    });
  }, []);
  return (
    <Background>
      <Header>Let’s start</Header>
      <Paragraph>
        Hi {email}
      </Paragraph>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor
        and start editing this project.
      </Paragraph>
      <Button mode="outlined" onPress={handleLogout}>
        Logout
      </Button>
    </Background>
  );
};

export default HomeScreen;
