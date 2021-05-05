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
  },
  textStyleError: {
    color: colors.darkRed,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  textStyleValue: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
    color: 'white',
    fontFamily: 'Roboto',
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
