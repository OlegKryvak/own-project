import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { CustomText, Toggler } from '../../components';
import { theme, WINDOW_WIDTH } from '../../styles';
import { useAppSelector } from '../../store/hooks';
import {
  setAddFunds,
  setChargingStarted,
  setChargingInterrupted,
  setChargingCompleted,
  setReservationIsOver,
  setLostConnection,
  settingsSelector
} from '../../store/reducers/settings';

interface Props {
  title: string;
}

const SettingsTogglers: FC<Props> = ({ title }) => {
  const {
    themeMode,
    addFunds,
    chargingStarted,
    chargingInterrupted,
    chargingCompleted,
    reservationIsOver,
    lostConnection
  } = useAppSelector(settingsSelector);

  return (
    <>
      <View
        style={[
          styles.label,
          {
            borderColor:
              themeMode === 'Light'
                ? theme.colors.primary
                : theme.colors.white
          }
        ]}
      >
        <CustomText
          color={
            themeMode === 'Light'
              ? theme.colors.primary
              : theme.colors.darkSecondary
          }
        >
          {title}
        </CustomText>
      </View>
      <Toggler
        value={addFunds}
        title="Add funds to account"
        onChange={setAddFunds}
      />
      <Toggler
        value={chargingStarted}
        title="Charging started"
        onChange={setChargingStarted}
      />
      <Toggler
        value={chargingInterrupted}
        title="Charging interrupted"
        onChange={setChargingInterrupted}
      />
      <Toggler
        value={chargingCompleted}
        title="Charging complete"
        onChange={setChargingCompleted}
      />
      <Toggler
        value={reservationIsOver}
        title="Reservation time is over"
        onChange={setReservationIsOver}
      />
      <Toggler
        value={lostConnection}
        title="Station has lost connection with server"
        onChange={setLostConnection}
      />
    </>
  );
};

const styles = StyleSheet.create({
  label: {
    width: WINDOW_WIDTH - 40,
    borderColor: theme.colors.primary,
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 4,
    marginTop: 10
  }
});
export default SettingsTogglers;
