import { View, StyleSheet, TouchableOpacity } from 'react-native';
import React, { FC, useState } from 'react';
import { theme } from '../../styles';
import {
  Background,
  Button,
  CustomText,
  TextInput
} from '../../components';
import {
  emailValidator,
  nameValidator,
  passwordValidator
} from '../../utils';

interface Props {
  navigation: any;
}

const RegisterScreen: FC<Props> = ({ navigation }) => {
  const [name, setName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] = useState({ value: '', error: '' });

  const onSignUpPressed = () => {
    const nameError = nameValidator(name.value);
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError || nameError) {
      setName({ ...name, error: nameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    navigation.reset({
      index: 0,
      routes: [{ name: 'Dashboard' }]
    });
  };

  return (
    <Background>
      <View style={styles.container}>
        <CustomText fontSize={24}>Create Account</CustomText>
        <TextInput
          label="Name"
          returnKeyType="next"
          value={name.value}
          onChangeText={text => setName({ value: text, error: '' })}
          error={!!name.error}
          errorText={name.error}
        />
        <TextInput
          label="Email"
          returnKeyType="next"
          value={email.value}
          onChangeText={text => setEmail({ value: text, error: '' })}
          error={!!email.error}
          errorText={email.error}
          autoCapitalize="none"
          autoCompleteType="email"
          textContentType="emailAddress"
          keyboardType="email-address"
        />
        <TextInput
          label="Password"
          returnKeyType="done"
          value={password.value}
          onChangeText={text =>
            setPassword({ value: text, error: '' })
          }
          error={!!password.error}
          errorText={password.error}
          secureTextEntry
        />
        <Button
          mode="contained"
          onPress={onSignUpPressed}
          style={{
            marginTop: 24,
            backgroundColor: theme.colors.primary
          }}
        >
          <CustomText color={theme.colors.white} fontWeight="700">
            Sign Up
          </CustomText>
        </Button>
        <View style={styles.row}>
          <CustomText
            fontWeight="600"
            color={theme.colors.secondary}
            fontSize={14}
          >
            Already have an account?{' '}
          </CustomText>
          <TouchableOpacity
            onPress={() => navigation.replace('LoginScreen')}
          >
            <CustomText
              fontWeight="600"
              color={theme.colors.primary}
              fontSize={14}
            >
              Login
            </CustomText>
          </TouchableOpacity>
        </View>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  row: {
    flexDirection: 'row',
    marginTop: 4
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary
  }
});

export default RegisterScreen;
