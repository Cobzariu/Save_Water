import {StyleSheet} from 'react-native';
import {colors} from '../../../core/themes';

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
    backgroundColor: colors.darkBlue,
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
    color: colors.darkRed,
  },
  superScriptText: {
    lineHeight: 18,
    fontStyle: 'italic',
    fontSize: 15,
    color: colors.darkRed,
  },
});

export default usageItemStyles;
