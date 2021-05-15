import {StyleSheet} from 'react-native';
import {colors} from '../../../core/themes';

const peopleListStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.backgroundBlue,
  },
  subView: {
    padding: 5,
  },
  titleText: {
    fontSize: 20,
    color: 'black',
    fontFamily: 'Roboto-Regular',
    textAlign: 'center',
  },
  addView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 5,
    marginBottom: 5,
  },
});

export default peopleListStyles;
