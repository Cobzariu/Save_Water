import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../../core/themes/colors';

const peopleScreenStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: colors.backgroundBlue,
  },
  subView: {
    padding: 5,
  },
  titleText: {
    fontSize: 18,
    color: 'black',
  },
  addView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 5,
    marginBottom: 5,
  },
  listView: {},
});

export default peopleScreenStyles;
