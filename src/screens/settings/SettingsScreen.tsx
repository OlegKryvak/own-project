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

const SettingsScreen: FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <Header>SettingsScreen</Header>
    </Background>
  );
};

export default SettingsScreen;
