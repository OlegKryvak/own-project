import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Background, TopBar } from '../../../components';

interface Props {
  navigation: any;
}

const QRCodeScannerScreen: FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <View>
        <TopBar headline="QR code scanner" />
      </View>
      <View style={{ flex: 1 }}>
        <Text>QRCodeScannerScreen</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default QRCodeScannerScreen;
