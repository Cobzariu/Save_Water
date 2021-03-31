import {StyleSheet} from 'react-native';

const firstHouseholdScreenStyles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
  },
  qustionTextStyle:{
    fontSize: 15,
  },
  locationTypeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: "space-between",
    marginTop: 20,
  },
  questionsView: {
    marginLeft: 5,
    marginRight: 5,
  },
  dropViewContainerStyle: {
    height: 40,
    marginLeft: 20,
    flex: 1,
  },
  numericInputContainerStyle: {
    //marginLeft: 20,
  },
});

export default firstHouseholdScreenStyles;
