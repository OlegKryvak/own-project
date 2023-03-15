import RadioButtonRN from 'radio-buttons-react-native';
import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { FONT_FAMILY, theme, WINDOW_WIDTH } from '../../styles';
import { ISettings } from '../../types/settings';
import { CustomText } from '../../components';

interface Props {
  title: string;
  data: ISettings[];
  onChange: (e: ISettings) => void;
}

const SettingsRadioBtn: FC<Props> = ({ title, data, onChange }) => {
  return (
    <>
      <View style={styles.label}>
        <CustomText color={theme.colors.primary}>
          {title}
        </CustomText>
      </View>
      <RadioButtonRN
        initial={1}
        textColor={theme.colors.lightGreen}
        textStyle={{
          fontFamily: FONT_FAMILY,
          fontSize: 16,
          fontWeight: '700'
        }}
        boxStyle={{
          width: WINDOW_WIDTH-60,

        }}
        data={data}
        selectedBtn={onChange}
        boxActiveBgColor={theme.colors.white}
        boxDeactiveBgColor={theme.colors.secondary}
        activeColor={theme.colors.lightGreen}
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
export default SettingsRadioBtn;
