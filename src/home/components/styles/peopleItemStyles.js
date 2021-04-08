import {StyleSheet} from 'react-native';

const peopleItemStyles = StyleSheet.create({
  mainView: {
    margin: 5,
  },
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  titleText: {
    fontSize: 16,
    marginRight: 20,
  },
  valueText: {
    fontStyle: 'italic',
  },
});

export default peopleItemStyles;
