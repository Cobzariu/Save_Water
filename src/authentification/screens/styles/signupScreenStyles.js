import {StyleSheet} from 'react-native';

const signupScreenStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#003f5c',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    fontWeight:"bold",
    fontSize:50,
    color:"#fb5b5a",
    marginBottom:40
  },
  errorMessage: {
    fontSize: 16,
    color: '#fb5b5a',
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    marginTop: 15,
  },
  signupText:{
    color:"white"
  }
});

export default signupScreenStyles;
