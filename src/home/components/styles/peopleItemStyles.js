import {StyleSheet} from 'react-native';

const peopleItemStyles = StyleSheet.create({
  mainView: {
    margin: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#dbdbdb',
    borderRadius:15,
    padding:10,
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
