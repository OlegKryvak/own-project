import { StyleSheet } from 'react-native';
import { FONT_FAMILY_REGULAR } from '@styles/typography';
import { scaleFont } from '@styles/mixins';
import colors from '@styles/colors';

export default StyleSheet.create({
  errorText: {
    fontFamily: FONT_FAMILY_REGULAR,
    fontSize: scaleFont(12),
    color: colors.error,
    marginTop: 3
  },
  textUnderline: {
    textDecoration: 'underline'
  }
});
