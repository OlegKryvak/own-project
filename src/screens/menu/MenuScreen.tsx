import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { INavigationCard } from '../../types/components';
import { menuNavigation } from '../../utils';
import {
  Background,
  NavigationCard
} from '../../components';
import {
  scaleSize,
  SCALE_46,
  SCALE_50,
  WINDOW_WIDTH
} from '../../styles';

interface Props {
  navigation: any;
}

const MenuScreen: FC<Props> = ({ navigation }) => {
  return (
    <Background>
      <Image
        style={styles.teslaImg}
        source={require('../../assets/images/tesla.png')}
      />
      <View style={styles.navigationContainer}>
        {menuNavigation.map((item: INavigationCard) => {
          return (
            <NavigationCard
              key={item.text}
              text={item.text}
              icon={item.icon}
              navigateTo={item.navigateTo}
            />
          );
        })}
      </View>
    </Background>
  );
};

const styles = StyleSheet.create({
  teslaImg: {
    maxHeight: scaleSize(220),
    aspectRatio: 2.2,
    marginTop: SCALE_50
  },
  navigationContainer: {
    flex: 1,
    alignItems: 'center',
    width: WINDOW_WIDTH - 20,
    marginTop: SCALE_46
  }
});

export default MenuScreen;
