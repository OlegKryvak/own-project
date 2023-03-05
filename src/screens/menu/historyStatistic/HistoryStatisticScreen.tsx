import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Background, TopBar } from '../../../components';

interface Props {
  navigation: any;
}

const HistoryStatisticScreen: FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <View>
        <TopBar headline="History statistic" />
      </View>
      <View style={{ flex: 1 }}>
        <Text>HistoryStatisticScreen</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default HistoryStatisticScreen;
