import {StyleSheet, Dimensions} from 'react-native';
const window = Dimensions.get('window');

const peopleScreenStyles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: '#bedcfa',
  },
  subView: {
    margin: 5,
  },
  titleText: {
    fontSize: 18,
    color: 'black',
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
