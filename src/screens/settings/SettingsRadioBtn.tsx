import RadioButtonRN from 'radio-buttons-react-native';
import { StyleSheet, View } from 'react-native';
import React, { FC } from 'react';
import { settingsSelector } from '../../store/reducers/settings';
import { FONT_FAMILY, theme, WINDOW_WIDTH } from '../../styles';
import { useAppSelector } from '../../store/hooks';
import { ISettings } from '../../types/settings';
import { CustomText } from '../../components';

interface Props {
  title: string;
  data: ISettings[];
  initial: number;
  onChange: (e: ISettings) => void;
}

const SettingsRadioBtn: FC<Props> = ({
  title,
  data,
  onChange,
  initial
}) => {
  const { themeMode } = useAppSelector(settingsSelector);

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
      <RadioButtonRN
        initial={initial}
        textColor={theme.colors.lightGreen}
        textStyle={{
          fontFamily: FONT_FAMILY,
          fontSize: 16,
          fontWeight: '700'
        }}
        boxStyle={{
          width: WINDOW_WIDTH - 60
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
    borderWidth: 2,
    alignItems: 'center',
    borderRadius: 10,
    paddingVertical: 4,
    marginTop: 10
  }
});
export default SettingsRadioBtn;
