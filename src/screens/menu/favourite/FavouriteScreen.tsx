import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { Background, TopBar } from '../../../components';

interface Props {
  navigation: any;
}

const FavouriteScreen: FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <View>
        <TopBar headline="Favourite" />
      </View>
      <View style={{ flex: 1 }}>
        <Text>FavouriteScreen</Text>
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default FavouriteScreen;
