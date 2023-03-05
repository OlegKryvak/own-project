import React, { FC } from 'react';
import { useAsyncStorage } from '../../hooks';
import { Background, Header, Paragraph } from '../../components';

interface Props {
  navigation: any;
}

const HomeScreen: FC<Props> = ({ navigation }) => {
  const [email] = useAsyncStorage('@email');
  return (
    <Background>
      <Header>Let’s start</Header>
      <Paragraph>Hi {email}</Paragraph>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor
        and start editing this project.
      </Paragraph>
    </Background>
  );
};

export default HomeScreen;
