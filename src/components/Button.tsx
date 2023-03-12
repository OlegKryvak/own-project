import { Button as PaperButton } from 'react-native-paper';
import { StyleSheet } from 'react-native';
import React, { FC } from 'react';
import { IButton } from '../types/components';
import { theme } from '../styles';

interface Props extends IButton {}

const Button: FC<Props> = ({ mode, style, ...props }) => {
  return (
    <PaperButton
      style={[
        styles.button,
        mode === 'outlined' && {
          backgroundColor: theme.colors.surface
        },
        style
      ]}
      mode={mode}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  button: {
    width: '100%',
    marginVertical: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
  },
});

export default Button;
