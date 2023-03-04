import { TouchableOpacity, StyleSheet, View } from 'react-native';
import React, { FC, useState } from 'react';
import { Text } from 'react-native-paper';
import { IEmail, IPassword } from '../../types/components';
import { theme } from '../../styles';
import {
  Background,
  Button,
  Header,
  TextInput
} from '../../components';
import {
  emailValidator,
  passwordValidator,
  signIn
} from '../../utils';

interface Props {
  navigation: any;
}

const LoginScreen: FC<Props> = ({ navigation }) => {
  const [email, setEmail] = useState<IEmail>({
    value: '',
    error: ''
  });
  const [password, setPassword] = useState<IPassword>({
    value: '',
    error: ''
  });

  const onLoginPressed = () => {
    const emailError = emailValidator(email.value);
    const passwordError = passwordValidator(password.value);
    if (emailError || passwordError) {
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      return;
    }
    signIn(email.value, () => {
      navigation.reset({
        index: 0,
        routes: [{ name: 'DashboardScreen' }]
      });
    });
  };

  return (
    <Background>
      <Header>Welcome back.</Header>
      <TextInput
        label="Email"
        returnKeyType="next"
        value={email.value}
        onChangeText={(text: string) =>
          setEmail({ value: text, error: '' })
        }
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
        onChangeText={(text: string) =>
          setPassword({ value: text, error: '' })
        }
        error={!!password.error}
        errorText={password.error}
        secureTextEntry
      />
      <View style={styles.forgotPassword}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ResetPasswordScreen')}
        >
          <Text style={styles.forgot}>Forgot your password?</Text>
        </TouchableOpacity>
      </View>
      <Button mode="contained" onPress={onLoginPressed}>
        Login
      </Button>
      <View style={styles.row}>
        <Text>Don’t have an account? </Text>
        <TouchableOpacity
          onPress={() => navigation.replace('RegisterScreen')}
        >
          <Text style={styles.link}>Sign up</Text>
        </TouchableOpacity>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24
  },
  row: {
    flexDirection: 'row',
    marginTop: 4
  },
  forgot: {
    fontSize: 13,
    color: theme.colors.secondary
  },
  link: {
    fontWeight: 'bold',
    color: theme.colors.primary
  }
});

export default LoginScreen;
