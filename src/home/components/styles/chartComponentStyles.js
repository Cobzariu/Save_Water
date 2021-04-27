import {StyleSheet} from 'react-native';

const chartComponentStyles = StyleSheet.create({
  subViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 20,
    lineHeight: 20,
    alignSelf: 'center',
    color: '#fb5b5a',
    fontWeight: 'bold',
  },
  noDataTextStyle: {
    marginVertical: 20,
    fontSize: 20,
    lineHeight: 20,
    fontWeight: 'bold',
    alignSelf: 'center',
    color: '#fb5b5a',
  },
});

export default chartComponentStyles;
