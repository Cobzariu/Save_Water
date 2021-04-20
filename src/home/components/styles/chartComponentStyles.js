import {StyleSheet} from 'react-native';

const chartComponentStyles = StyleSheet.create({
  subViewStyle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  textStyle: {
    fontSize: 18,
    lineHeight: 18,
    alignSelf: 'center',
    color: '#fb5b5a'
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
