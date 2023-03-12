import { TouchableOpacity, StyleSheet, View } from 'react-native';
import React, { FC, useState } from 'react';
import { IEmail, IPassword } from '../../types/components';
import { theme } from '../../styles';
import {
  Background,
  Button,
  CustomText,
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
        routes: [{ name: 'MainContainer' }]
      });
    });
  };

  return (
    <Background>
      <View style={styles.container}>
        <CustomText fontSize={24}>Welcome back</CustomText>
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
            onPress={() =>
              navigation.navigate('ResetPasswordScreen')
            }
          >
            <CustomText
              fontWeight="600"
              color={theme.colors.secondary}
              fontSize={14}
            >
              Forgot your password?
            </CustomText>
          </TouchableOpacity>
        </View>
        <Button
          style={{ backgroundColor: theme.colors.primary }}
          mode="contained"
          onPress={onLoginPressed}
        >
          <CustomText color={theme.colors.white} fontWeight="700">
            Login
          </CustomText>
        </Button>
        <View style={styles.row}>
          <CustomText
            fontWeight="600"
            color={theme.colors.secondary}
            fontSize={14}
          >
            Don’t have an account?{' '}
          </CustomText>
          <TouchableOpacity
            onPress={() => navigation.replace('RegisterScreen')}
          >
            <CustomText
              fontWeight="600"
              color={theme.colors.primary}
              fontSize={14}
            >
              Sign up
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
  forgotPassword: {
    width: '100%',
    alignItems: 'flex-end',
    marginBottom: 24
  },
  row: {
    flexDirection: 'row',
    marginTop: 4
  }
});

export default LoginScreen;
