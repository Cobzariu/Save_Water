import {StyleSheet} from 'react-native';
import { colors } from '../../../core/themes';

const chartComponentStyles = StyleSheet.create({
  subViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5
  },
  textStyle: {
    fontSize: 20,
    alignSelf: 'center',
    color: colors.darkRed,
    fontFamily: 'Roboto-Bold',

  },
  noDataTextStyle: {
    marginVertical: 20,
    fontSize: 20,
    fontFamily: 'Roboto-Bold',
    alignSelf: 'center',
    color: colors.darkRed,
  },
});

export default chartComponentStyles;
