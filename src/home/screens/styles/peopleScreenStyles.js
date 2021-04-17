import {StyleSheet, Dimensions} from 'react-native';
const window = Dimensions.get('window');

const peopleScreenStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'white',
  },
  subView: {
    margin: 5,
  },
  titleText: {
    fontSize: 18,
  },
  addView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginRight: 5,
  },
  listView: {
   
  },
});

export default peopleScreenStyles;
