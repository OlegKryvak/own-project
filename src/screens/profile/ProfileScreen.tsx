import { StyleSheet, Text, View } from 'react-native';
import React, { FC } from 'react';
import { settingsSelector } from '../../store/reducers/settings';
import { INavigationCard } from '../../types/components';
import { FONT_FAMILY } from '../../styles/typography';
import { useAppSelector } from '../../store/hooks';
import { profileNavigation } from '../../utils';
import {
  Background,
  CustomText,
  NavigationCard
} from '../../components';
import {
  boxShadow,
  scaleFont,
  SCALE_28,
  theme,
  WINDOW_WIDTH
} from '../../styles';
import { useTranslation } from 'react-i18next';

interface Props {
  navigation: any;
}

const ProfileScreen: FC<Props> = ({ navigation }) => {
  const { themeMode } = useAppSelector(settingsSelector);
  
  return (
    <Background>
      <View style={styles.infoContainer}>
        <CustomText
          color={
            themeMode === 'Light'
              ? theme.colors.secondary
              : theme.colors.white
          }
          fontSize={scaleFont(22)}
        >
          Oleg Kryvak
        </CustomText>
        <CustomText
          color={
            themeMode === 'Light'
              ? theme.colors.primary
              : theme.colors.darkPrimary
          }
          fontSize={scaleFont(18)}
        >
          Balance
        </CustomText>
        <View style={styles.balanceType}>
          <Text
            style={[
              styles.textTitle,
              boxShadow(theme.colors.secondary),
              {
                color:
                  themeMode === 'Light'
                    ? theme.colors.secondary
                    : theme.colors.white
              }
            ]}
          >
            Main:
          </Text>
          <Text
            style={[
              styles.textValue,
              boxShadow(theme.colors.lightGreen)
            ]}
          >
            0.00$
          </Text>
        </View>
        <View
          style={[
            styles.divider,
            {
              backgroundColor:
                themeMode === 'Light'
                  ? theme.colors.primary
                  : theme.colors.darkPrimary
            }
          ]}
        />
        <View style={styles.balanceType}>
          <Text
            style={[
              styles.textTitle,
              boxShadow(theme.colors.secondary),
              {
                color:
                  themeMode === 'Light'
                    ? theme.colors.secondary
                    : theme.colors.white
              }
            ]}
          >
            Bonus:
          </Text>
          <Text
            style={[
              styles.textValue,
              boxShadow(theme.colors.lightGreen)
            ]}
          >
            0.00$
          </Text>
        </View>
      </View>
      <View style={styles.navigationContainer}>
        {profileNavigation.map((item: INavigationCard) => {
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
  infoContainer: {
    flex: 1,
    marginTop: SCALE_28,
    alignItems: 'center',
    justifyContent: 'center'
  },
  balanceType: {
    width: WINDOW_WIDTH - 100,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 8
  },
  textTitle: {
    fontFamily: FONT_FAMILY,
    fontWeight: '600',
    fontSize: scaleFont(16)
  },
  textValue: {
    fontFamily: FONT_FAMILY,
    fontWeight: '800',
    fontSize: scaleFont(14),
    color: theme.colors.lightGreen
  },
  divider: {
    height: 1,
    width: WINDOW_WIDTH - 100
  },
  navigationContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    width: WINDOW_WIDTH - 20
  }
});

export default ProfileScreen;
