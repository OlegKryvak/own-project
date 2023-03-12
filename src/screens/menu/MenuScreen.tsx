import React, { FC } from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Background, NavigationCard } from '../../components';
import { verticalScale, WINDOW_WIDTH } from '../../styles';
import { INavigationCard } from '../../types/components';
import { menuNavigation } from '../../utils';

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
    maxHeight: '30%',
    aspectRatio: 2.2,
    marginTop: verticalScale(30)
  },
  navigationContainer: {
    flex: 1,
    alignItems: 'center',
    width: WINDOW_WIDTH - 20,
    marginTop: verticalScale(30)
  }
});

export default MenuScreen;
