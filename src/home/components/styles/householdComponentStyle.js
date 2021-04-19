import {StyleSheet} from 'react-native';

const householdComponentStyle = StyleSheet.create({
  mainTitleText: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
  },
  mainView: {
    marginBottom: 20,
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
  subTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  valueText: {},
  outdoorView: {
    marginTop: 20,
    marginBottom: 10,
  },
  editView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
});

export default householdComponentStyle;
