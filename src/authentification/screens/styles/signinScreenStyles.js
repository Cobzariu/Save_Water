import {StyleSheet} from 'react-native';
import {colors} from '../../../core/themes';

const siginScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    fontFamily: 'Roboto-Bold',
    fontSize: 50,
    color: colors.darkRed,
    marginBottom: 40,
  },
  errorMessage: {
    fontSize: 16,
    color: colors.darkRed,
    fontFamily: 'Roboto-Italic',
    marginTop: 15,
  },
  signupText: {
    color: 'white',
    fontFamily: 'Roboto-Regular',
  },
});

export default siginScreenStyles;
