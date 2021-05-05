import {StyleSheet} from 'react-native';
import { colors } from '../../../core/themes';

const firstHouseholdScreenStyles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 15,
    color: 'white',
    fontFamily: 'Roboto-Regular'
  },
  qustionTextStyle: {
    fontSize: 15,
    fontFamily: 'Roboto-Regular',
    marginBottom: 10,
    color: 'white',
  },
  locationTypeView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  questionsView: {
    marginLeft: 5,
    marginRight: 5,
  },
  dropViewContainerStyle: {
    height: 40,
    marginLeft: 20,
  },

  mainViewStyle: {
    flex: 1,
    backgroundColor: colors.darkBlue,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default firstHouseholdScreenStyles;
