import {StyleSheet, Dimensions} from 'react-native';
import {colors} from '../../../core/themes';

const statsDetailsStyles = StyleSheet.create({
  mainView: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    flex: 1,
  },
  secondView: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  textStyle: {
    fontSize: 16,
    color: 'white',
    fontFamily: 'Roboto-Regular',
  },
  textStyleError: {
    color: colors.darkRed,
    fontSize: 16,
    fontFamily: 'Roboto-Italic',
  },
  textStyleValue: {
    fontSize: 16,
    marginTop: 5,
    fontFamily: 'Roboto-Bold',
    color: 'white',
  },
  item: {
    height: 100,
    width: Dimensions.get('window').width / 2 - 20,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 5,
    backgroundColor: colors.darkBlue,
  },
});
export default statsDetailsStyles;
