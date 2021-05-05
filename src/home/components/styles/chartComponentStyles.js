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
    lineHeight: 20,
    alignSelf: 'center',
    color: colors.darkRed,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  noDataTextStyle: {
    marginVertical: 20,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: colors.darkRed,
  },
});

export default chartComponentStyles;
