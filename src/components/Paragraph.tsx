import React, { FC, ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';

interface Props {
  children: ReactNode;
}

const Paragraph: FC<Props> = props => {
  return <Text style={styles.text} {...props} />;
};

const styles = StyleSheet.create({
  text: {
    fontSize: 15,
    lineHeight: 21,
    textAlign: 'center',
    marginBottom: 12
  }
});

export default Paragraph;
