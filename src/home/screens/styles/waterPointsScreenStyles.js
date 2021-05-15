import {StyleSheet} from 'react-native';
import colors from '../../../core/themes/colors';

const waterPointsScreenStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.backgroundBlue,
  },
  chartView: {
    margin: 5,
  },
  mainTitleText: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Roboto-Regular',
    marginBottom: 15,
    marginTop: 5,
  },
  infoText: {
    textAlign: 'center',
    fontFamily: 'Roboto-Italic',
    fontSize: 15,
    marginTop: 5,
    color: colors.darkRed,
  },
});

export default waterPointsScreenStyles;
