import {StyleSheet} from 'react-native';

const householdComponentStyle = StyleSheet.create({
  mainTitleText: {
    fontSize: 22,
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
    fontSize: 17,
    marginRight: 20,
  },
  subTitleText: {
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
  },
  valueText: {
    fontStyle: 'italic',
    fontSize: 15,
  },
  outdoorView: {
    marginTop: 20,
    marginBottom: 10,
  },
  editView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default householdComponentStyle;
