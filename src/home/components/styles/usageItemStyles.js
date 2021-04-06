import {StyleSheet} from 'react-native';

const usageItemStyles = StyleSheet.create({
  mainView: {
    margin: 5,
  },
  subView: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 16,
    marginRight: 20,
  },
  valueText: {
    fontStyle: 'italic',
  },
  superScriptText: {
    lineHeight: 18,
  },
});

export default usageItemStyles;
