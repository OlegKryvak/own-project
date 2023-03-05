import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Background, TopBar } from '../../../components';

interface Props {
  navigation: any;
}

const PaymentArchiveScreen: FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <View>
        <TopBar headline="Payment archive" />
      </View>
      <View style={{ flex: 1 }}>
        <Text>PaymentArchiveScreen</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default PaymentArchiveScreen;
