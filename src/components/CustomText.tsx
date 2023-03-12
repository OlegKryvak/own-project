import React, { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import { boxShadow, scaleFont, theme } from '../styles';
import { FONT_FAMILY } from '../styles/typography';
import { IText } from '../types/components';

interface Props extends IText {}

const CustomText: FC<Props> = props => {
  const {
    fontSize = 16,
    color = theme.colors.primary,
    fontWeight = '900'
  } = props;
  return (
    <Text
      style={[
        styles.text,
        {
          color: color,
          fontSize: scaleFont(fontSize),
          fontWeight: fontWeight,
        },
        boxShadow(color)
      ]}
      {...props}
    />
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: FONT_FAMILY,
    paddingVertical: 8
  }
});

export default CustomText;
