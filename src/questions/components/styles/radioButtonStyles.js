import {StyleSheet} from 'react-native';
import {colors} from '../../../core/themes';

const radioButtonStyles = StyleSheet.create({
  mainView: {
    flexDirection: 'row',
  },
  container: {
    marginRight: 20,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  radioText: {
    marginRight: 15,
    color: 'white',
    fontFamily: 'Roboto-Regular',
  },
  radioCircle: {
    height: 30,
    width: 30,
    borderRadius: 100,
    borderWidth: 2,
    borderColor: colors.darkRed,
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedRb: {
    width: 15,
    height: 15,
    borderRadius: 50,
    backgroundColor: colors.darkRed,
  },
});

export default radioButtonStyles;
