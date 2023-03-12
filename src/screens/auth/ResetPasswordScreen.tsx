import React, { FC, useState } from 'react';
import { emailValidator } from '../../utils';
import { IEmail } from '../../types/components';
import {
  Background,
  Button,
  CustomText,
  TextInput,
  TopBar
} from '../../components';
import { View } from 'react-native';
import { theme } from '../../styles';

interface Props {
  navigation: any;
}

const ResetPasswordScreen: FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<IEmail>({
    value: '',
    error: ''
  });

  const sendResetPasswordEmail = () => {
    const emailError = emailValidator(email.value);
    if (emailError) {
      setEmail({ ...email, error: emailError });
      return;
    }
    navigation.navigate('LoginScreen');
  };

  return (
    <Background>
      <TopBar headline="Restore Password" />
      <View
        style={{
          flex: 1,
          width: '100%',
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <TextInput
          label="E-mail address"
          returnKeyType="done"
          value={email.value}
          onChangeText={text => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
          description="You will receive email with password reset link."
        />
        <Button
          mode="contained"
          onPress={sendResetPasswordEmail}
          style={{
            marginTop: 16,
            backgroundColor: theme.colors.primary
          }}
        >
          <CustomText color={theme.colors.white} fontWeight="700">
            Send Instructions
          </CustomText>
        </Button>
      </View>
    </Background>
  );
};

export default ResetPasswordScreen;
