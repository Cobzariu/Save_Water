import {StyleSheet} from 'react-native';

const adviceItemStyles = StyleSheet.create({
  mainView: {
    margin: 10,
    padding: 10,
    alignSelf: 'center',
    width: '96%',
    backgroundColor: '#FFF',
    flexDirection: 'row',
    borderRadius: 5,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
  },
  descriptionText: {
    fontSize: 18,
    fontFamily: 'Roboto-Regular',
    color: 'black',
  },
});

export default adviceItemStyles;
