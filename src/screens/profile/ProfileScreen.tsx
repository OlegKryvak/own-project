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

const ProfileScreen: FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <Header>ProfileScreen</Header>
    </Background>
  );
};

export default ProfileScreen;
