import {StyleSheet} from 'react-native';
import {colors} from '../../../core/themes';

const secondHouseholdScreenStyles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 15,
    color: 'white',
  },
  qustionTextStyle: {
    fontSize: 15,
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
    flex: 1,
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
  buttonStyle: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    marginBottom: 20,
    height: 20,
  },
});

export default secondHouseholdScreenStyles;
