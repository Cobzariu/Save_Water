import {StyleSheet} from 'react-native';
import colors from '../../themes/colors';

const splashScreenStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.backgroundBlue,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textStyle: {
    fontSize: 40,
    color: colors.darkBlue,
    textAlign: 'center',
  },
  imageStyle: {
    flex: 1,
    justifyContent: 'center',
    width: 500,
    height: 500,
  },
});

export default splashScreenStyles;
