import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Background, TopBar } from '../../../components';

interface Props {
  navigation: any;
}

const PersonalInfoScreen: FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <View>
        <TopBar headline="Personal info" />
      </View>
      <View style={{ flex: 1 }}>
        <Text>PersonalInfoScreen</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default PersonalInfoScreen;
