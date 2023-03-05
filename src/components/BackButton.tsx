import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native';
import React, { FC } from 'react';
import { theme } from '../styles';

interface Props {
  goBack: () => void;
}

const BackButton: FC<Props> = ({ goBack }) => {
  return (
    <TouchableOpacity onPress={goBack}>
      <Ionicons
        name="arrow-back-circle"
        size={30}
        color={theme.colors.primary}
      />
    </TouchableOpacity>
  );
};

export default BackButton;
