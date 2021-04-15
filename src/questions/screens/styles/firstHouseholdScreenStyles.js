import {StyleSheet} from 'react-native';

const firstHouseholdScreenStyles = StyleSheet.create({
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
  },
  dropViewContainerStyle: {
    height: 40,
    marginLeft: 20,
  },

  mainViewStyle: {
    flex: 1,
    backgroundColor: '#003f5c',
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

export default firstHouseholdScreenStyles;
