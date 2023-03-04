import React, { FC, useState } from 'react';
import { emailValidator } from '../../utils';
import { IEmail } from '../../types/components';
import {
  BackButton,
  Background,
  Button,
  Header,
  TextInput
} from '../../components';


interface Props {
  navigation: any;
}

const ResetPasswordScreen: FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<IEmail>({ value: '', error: '' });

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
      <BackButton goBack={()=> navigation.goBack()} />
      <Header>Restore Password</Header>
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
        style={{ marginTop: 16 }}
      >
        Send Instructions
      </Button>
    </Background>
  );
};

export default ResetPasswordScreen;
