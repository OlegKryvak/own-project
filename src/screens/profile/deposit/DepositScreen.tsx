import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Background, TopBar } from '../../../components';

interface Props {
  navigation: any;
}

const DepositScreen: FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <View>
        <TopBar headline="Deposit" />
      </View>
      <View style={{ flex: 1 }}>
        <Text>DepositScreen</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default DepositScreen;
