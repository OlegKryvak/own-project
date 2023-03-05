import React, { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { FONT_FAMILY } from '../styles/typography';
import { IHeader } from '../types/components';
import { boxShadow, theme } from '../styles';

interface Props extends IHeader {}

const Header: FC<Props> = props => {
  const { fontSize = 16, color = theme.colors.primary } = props;
  return (
    <Text
      style={[styles.header, { color: color, fontSize: fontSize }, boxShadow(color)]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  header: {
    fontFamily: FONT_FAMILY,
    fontWeight: '900',
    paddingVertical: 8
  }
});

export default Header;
