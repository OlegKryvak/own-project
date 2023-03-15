import { StyleSheet, View } from 'react-native';
import React, { FC, ReactNode } from 'react';
import { theme } from '../styles';

interface Props {
  children: ReactNode;
}

const Background: FC<Props> = ({ children }) => {
  return <View style={styles.background}>{children}</View>;
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: theme.colors.primaryContainer,
    padding: 20,
    alignSelf: 'center',
    alignItems: 'center'
  }
});
export default Background;
