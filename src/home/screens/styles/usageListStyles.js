import {StyleSheet} from 'react-native';

const usageListStyles = StyleSheet.create({
  mainView: {
    margin: 5,
    flex: 1,
  },
  headerMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 18,
  },
  amountView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  inputStyle: {
    width: 100,
    height: 50,
  },
  inputSpinnerStyle: {
    marginLeft: 10,
  },
  dropDownMainStyle: {
    marginLeft: 10,
    height: 30,
    borderWidth: 1,
    width: 150,
    borderRadius: 10,
    justifyContent: 'center',
  },
  dropDownStyle: {
    width: 150,
  },
  dropDownTextStyle: {
    fontSize: 14,
    margin: 5,
  },
  dropDownDropTextStyle: {
    fontSize: 14,
  },
  buttonViewStyle: {
    marginTop: 40,
  },
  errorMessage: {
    fontSize: 13,
    marginTop: 10,
    color: 'red',
  },
});

export default usageListStyles;
