import {StyleSheet} from 'react-native';

const managePersonStyles = StyleSheet.create({
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
    marginBottom: 25,
  },
  questionsView: {
    marginLeft: 5,
    marginRight: 5,
  },
  mainViewStyle: {
    flex: 1,
    backgroundColor: '#003f5c',
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
    color: '#fb5b5a',
    fontWeight: 'bold',
  },
});

export default managePersonStyles;
