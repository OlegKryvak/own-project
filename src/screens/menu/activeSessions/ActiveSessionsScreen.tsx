import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Background, TopBar } from '../../../components';

interface Props {
  navigation: any;
}

const ActiveSessionsScreen: FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <View>
        <TopBar headline="Active sessions" />
      </View>
      <View style={{ flex: 1 }}>
        <Text>ActiveSessionsScreen</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default ActiveSessionsScreen;
