import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { CustomText, Toggler } from '../../components';
import { theme, WINDOW_WIDTH } from '../../styles';

interface Props {
  title: string;
}

const SettingsTogglers: FC<Props> = ({ title }) => {
  return (
    <>
      <View style={styles.label}>
        <CustomText color={theme.colors.primary}>{title}</CustomText>
      </View>
      <Toggler
        title="Add funds to account"
        onChange={() => console.log('')}
      />
      <Toggler
        title="Charging started"
        onChange={() => console.log('')}
      />
      <Toggler
        title="Charging interrupted"
        onChange={() => console.log('')}
      />
      <Toggler
        title="Charging complete"
        onChange={() => console.log('')}
      />
      <Toggler
        title="Reservation time is over"
        onChange={() => console.log('')}
      />
      <Toggler
        title="Station has lost connection with server"
        onChange={() => console.log('')}
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
