import {StyleSheet} from 'react-native';
import {colors} from '../../../core/themes';

const editHouseholdScreenStyles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 15,
    color: 'white',
    fontFamily: 'Roboto-Regular',
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
  indoorTextStyle: {
    color: 'white',
    textAlign: 'left',
    justifyContent: 'flex-start',
    fontFamily: 'Roboto-Bold',
    fontSize: 18,
  },
  indoorView: {
    width: '100%',
    marginLeft: 20,
  },
  buttonView: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 20,
  },
});

export default editHouseholdScreenStyles;
