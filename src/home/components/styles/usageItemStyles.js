import {StyleSheet} from 'react-native';

const usageItemStyles = StyleSheet.create({
  mainView: {
    marginHorizontal: 10,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 3},
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
    backgroundColor: '#003f5c',
    borderRadius: 15,
    padding: 10,
  },
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  titleText: {
    fontSize: 16,
    marginRight: 20,
    color: 'white',
  },
  valueText: {
    fontStyle: 'italic',
    fontSize: 15,
    color: '#fb5b5a',
  },
  superScriptText: {
    lineHeight: 18,
    fontStyle: 'italic',
    fontSize: 15,
    color: '#fb5b5a',
  },
});

export default usageItemStyles;
