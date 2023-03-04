import React, { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { FONT_FAMILY } from '../styles/typography';
import { theme } from '../styles';

interface Props {
  children: ReactNode;
}

const Header: FC<Props> = props => {
  return <Text style={styles.header} {...props} />;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 21,
    color: theme.colors.primary,
    fontFamily: FONT_FAMILY,
    fontWeight: '900',
    paddingVertical: 12
  }
});

export default Header;
