import React, { FC } from 'react';
import { Background, CustomText } from '../../components';

interface Props {
  navigation: any;
}

const SettingsScreen: FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <CustomText>SettingsScreen</CustomText>
    </Background>
  );
};

export default SettingsScreen;
