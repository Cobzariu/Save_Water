import {StyleSheet} from 'react-native';
import colors from '../../../core/themes/colors';

const usageListStyles = StyleSheet.create({
  mainView: {
    backgroundColor: colors.backgroundBlue,
    flex: 1,
  },
  subView: {
    marginHorizontal: 5,
  },
  headerSecondView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  mainHeaderView: {
    margin: 5,
  },
  titleText: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
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
    backgroundColor: colors.darkBlue,
  },
  dropDownTextStyle: {
    fontSize: 15,
    margin: 5,
    color: 'white',
    fontFamily: 'Roboto-Light',
  },
  dropDownDropTextStyle: {
    fontSize: 15,
    fontFamily: 'Roboto-Light',
    color: 'white',
    backgroundColor: colors.darkBlue,
  },
  buttonViewStyle: {
    alignItems: 'center',
  },
  errorMessage: {
    fontSize: 13,
    fontFamily: 'Roboto-Bold',
    marginTop: 10,
    color: colors.darkRed,
  },
  overlayView: {
    backgroundColor: colors.darkBlue,
    borderRadius: 10,
  },
  overlayTextStyle: {
    color: 'white',
    fontSize: 15,
    fontFamily: 'Roboto-Light',
  },
  superScriptText: {
    lineHeight: 16,
    fontFamily: 'Roboto-Light',
    fontSize: 15,
    color: 'white',
  },
  renderView: {
    borderColor: colors.darkRed,
    borderWidth: 1,
  },
});

export default usageListStyles;
