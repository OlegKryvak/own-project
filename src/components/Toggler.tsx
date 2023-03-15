import ToggleSwitch from 'toggle-switch-react-native';
import React, { FC, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  FONT_FAMILY,
  scaleFont,
  theme,
  WINDOW_WIDTH
} from '../styles';
import CustomText from './CustomText';

interface Props {
  title: string;
  onChange: () => void;
}

const Toggler: FC<Props> = ({ title, onChange }) => {
  const [isOn, setIsOn] = useState<boolean>(false);
  return (
    <View style={styles.container}>
      <View style={{width: '70%'}}>
        <CustomText
          color={theme.colors.secondary}
          fontWeight="700"
          fontSize={scaleFont(16)}
        >
          {title}
        </CustomText>
      </View>
      <ToggleSwitch
        isOn={isOn}
        onColor={theme.colors.white}
        offColor={theme.colors.secondary}
        thumbOnStyle={{ backgroundColor: theme.colors.lightGreen }}
        thumbOffStyle={{ backgroundColor: theme.colors.white }}
        size="medium"
        onToggle={() => setIsOn(prev => !prev)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: WINDOW_WIDTH - 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 4
  }
});
export default Toggler;
