import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Background, TopBar } from '../../../components';

interface Props {
  navigation: any;
}

const MyBankCardsScreen: FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <View>
        <TopBar headline="My bank cards" />
      </View>
      <View style={{ flex: 1 }}>
        <Text>MyBankCardsScreen</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default MyBankCardsScreen;
