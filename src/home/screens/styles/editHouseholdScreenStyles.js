import {StyleSheet} from 'react-native';

const editHouseholdScreenStyles = StyleSheet.create({
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
  indoorTextStyle: {
    color: 'white',
    textAlign: 'left',
    justifyContent: 'flex-start',
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
