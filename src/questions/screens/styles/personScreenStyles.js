import {StyleSheet} from 'react-native';

const personScreenStyles = StyleSheet.create({
  titleStyle: {
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15,
  },
  qustionTextStyle: {
    fontSize: 15,
  },
  locationTypeView: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  specialQustionView:{
    // /alignItems: 'center',
    justifyContent: 'space-between',
    marginTop: 30,
  },
  questionsView: {
    marginLeft: 5,
    marginRight: 5,
    //justifyContent: "space-evenly",
    flex: 1,
  },
  dropViewContainerStyle: {
    height: 40,
    marginLeft: 20,
  },
  numericInputContainerStyle: {
    //marginLeft: 20,
  },
  mainViewStyle: {
    flex: 1,
  },
  buttonStyle: {
    position: 'absolute',
    bottom: 20,
    left: 0,
    marginBottom:20,
    height: 20,
  },
});

export default personScreenStyles;
