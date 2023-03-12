import React, { FC } from 'react';
import { Background, CustomText, Paragraph } from '../../components';
import { useAsyncStorage } from '../../hooks';

interface Props {
  navigation: any;
}

const HomeScreen: FC<Props> = ({ navigation }) => {
  const [email] = useAsyncStorage('@email');
  return (
    <Background>
      <CustomText>Let’s start</CustomText>
      <Paragraph>Hi {email}</Paragraph>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor
        and start editing this project.
      </Paragraph>
    </Background>
  );
};

export default HomeScreen;
