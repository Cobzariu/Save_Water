import {StyleSheet} from 'react-native';
import {colors} from '../../../core/themes';

const managePersonStyles = StyleSheet.create({
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
    marginBottom: 10,
    color: 'white',
    fontFamily: 'Roboto-Regular'
  },
  locationTypeView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  questionsView: {
    marginLeft: 5,
    marginRight: 5,
  },
  mainViewStyle: {
    flex: 1,
    backgroundColor: colors.darkBlue,
  },
  contentContainerStyle: {
    alignItems: 'center',
  },
  buttonView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
  errorMessage: {
    fontSize: 16,
    color: colors.darkRed,
    fontFamily: 'Roboto-Italic',
  },
});

export default managePersonStyles;
