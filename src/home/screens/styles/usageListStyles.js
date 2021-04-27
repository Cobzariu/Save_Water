import {StyleSheet} from 'react-native';

const usageListStyles = StyleSheet.create({
  mainView: {
    backgroundColor: '#bedcfa',
    flex: 1,
  },
  subView: {
    marginHorizontal: 5,
  },
  headerMainView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5
  },
  titleText: {
    fontSize: 18,
  },
  amountView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
    justifyContent: 'space-between',
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
    borderColor: 'white',
    justifyContent: 'center',
  },
  dropDownStyle: {
    width: 150,
    height: 200,
    backgroundColor: '#fb5b5a',
  },
  dropDownTextStyle: {
    fontSize: 15,
    margin: 5,
    color: 'white',
  },
  dropDownDropTextStyle: {
    fontSize: 15,
    color: 'white',
    backgroundColor: '#003f5c',
  },
  buttonViewStyle: {
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 13,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#fb5b5a',
  },
  overlayView: {
    backgroundColor: '#003f5c',
    borderRadius: 10,
  },
  overlayTextStyle: {
    color: 'white',
    fontSize: 15,
  },
});

export default usageListStyles;
