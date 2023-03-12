import { TextInput as Input } from 'react-native-paper';
import { View, StyleSheet, Text } from 'react-native';
import React, { FC } from 'react';
import { ITextInput } from '../types/components';
import CustomText from './CustomText';
import { theme } from '../styles';

interface Props extends ITextInput {}

const TextInput: FC<Props> = ({
  errorText,
  description,
  ...props
}) => {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor={theme.colors.primary}
        underlineColor="transparent"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <CustomText
          fontSize={14}
          fontWeight="500"
          color={theme.colors.secondary}
        >
          {description}
        </CustomText>
      ) : null}
      {errorText ? (
        <Text style={styles.error}>{errorText}</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginVertical: 12
  },
  input: {
    backgroundColor: theme.colors.white
  },
  error: {
    fontSize: 13,
    color: theme.colors.error,
    paddingTop: 8
  }
});

export default TextInput;
