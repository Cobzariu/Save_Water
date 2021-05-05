import {StyleSheet} from 'react-native';
import colors from '../../../core/themes/colors';

const generalButtonStyles = StyleSheet.create({
  buttonView: {
    width: '80%',
    backgroundColor: colors.darkRed,
    borderRadius: 25,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
    marginBottom: 10,
  },
  textStyle: {
    color: 'white',
  },
});

export default generalButtonStyles;
