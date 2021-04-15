import {StyleSheet} from 'react-native';

const personScreenStyles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
    marginTop: 15,
    color: 'white',
  },
  qustionTextStyle: {
    fontSize: 15,
    marginBottom: 10,
    color: 'white',
  },
  locationTypeView: {
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 25,
  },
  questionsView: {
    marginLeft: 5,
    marginRight: 5,
  },
  mainViewStyle: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
  },
  buttonView: {
    width: '100%',
    alignItems: 'center',
    bottom: 0,
    position: 'absolute',
  },
});

export default personScreenStyles;
