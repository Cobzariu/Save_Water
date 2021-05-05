import {StyleSheet} from 'react-native';
import colors from '../../../core/themes/colors';

const householdScreenStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.backgroundBlue,
    justifyContent: 'space-between',
  },
  subView: {
    margin: 5,
  },
  buttonView: {
    alignItems: 'center',
  },
});

export default householdScreenStyles;
