import {StyleSheet, Dimensions} from 'react-native';

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
    color: '#fb5b5a',
    fontSize: 16,
    fontWeight: 'bold',
  },
  textStyleValue: {
    fontSize: 16,
    marginTop: 5,
    fontWeight: 'bold',
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
    backgroundColor: '#003f5c',
  },
});
export default statsDetailsStyles;
