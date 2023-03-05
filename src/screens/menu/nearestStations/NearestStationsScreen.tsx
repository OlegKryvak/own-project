import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Background, TopBar } from '../../../components';

interface Props {
  navigation: any;
}

const NearestStationsScreen: FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <View>
        <TopBar headline="Nearest stations" />
      </View>
      <View style={{ flex: 1 }}>
        <Text>NearestStationsScreen</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default NearestStationsScreen;
