import {StyleSheet} from 'react-native';
import {colors} from '../../../core/themes';
const detailedStatsScreenStyles = StyleSheet.create({
  mainViewStyle: {
    backgroundColor: colors.backgroundBlue,
    flex: 1,
  },
  graphsViewStyle: {
    margin: 5,
  },
  lowerCharViewStyle: {
    marginTop: 10,
  },
  subViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
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
  titleTextStyle: {
    textAlign: 'center',
    fontFamily: 'Roboto-Normal',
    fontSize: 20,
    marginBottom: 10,
  },
});

export default detailedStatsScreenStyles;
