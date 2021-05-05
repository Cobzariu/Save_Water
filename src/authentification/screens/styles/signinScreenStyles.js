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
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    fontSize: 50,
    color: colors.darkRed,
    marginBottom: 40,
  },
  errorMessage: {
    fontSize: 16,
    color: colors.darkRed,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginTop: 15,
  },
  signupText: {
    color: 'white',
  },
});

export default siginScreenStyles;
