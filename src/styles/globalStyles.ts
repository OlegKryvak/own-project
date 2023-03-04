import { StyleSheet } from 'react-native';
import { FONT_FAMILY } from './typography';
import { scaleFont } from './mixins';
import theme from './theme';

export default StyleSheet.create({
  errorText: {
    fontFamily: FONT_FAMILY,
    fontSize: scaleFont(12),
    color: theme.colors.error,
    marginTop: 3
  }
});
