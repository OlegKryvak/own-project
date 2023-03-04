import React, { FC } from 'react';
import {
  Background,
  Button,
  Header,
  Paragraph
} from '../../components';

interface Props {
  navigation: any;
}

const Dashboard: FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <Header>Let’s start</Header>
      <Paragraph>
        Your amazing app starts here. Open you favorite code editor
        and start editing this project.
      </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'LoginScreen' }]
          })
        }
      >
        Logout
      </Button>
    </Background>
  );
};

export default Dashboard;
