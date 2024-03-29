import {StyleSheet} from 'react-native';

const inputFieldStyles = StyleSheet.create({
  inputView: {
    width: '80%',
    backgroundColor: '#465881',
    borderRadius: 25,
    height: 50,
    marginBottom: 20,
    justifyContent: 'center',
    padding: 20,
  },
  inputText: {
    height: 50,
    color: 'white',
    fontFamily: 'Roboto-Regular',
  },
  touchableOpacityStyle: {
    position: 'absolute',
    right: 15,
  },
});

export default inputFieldStyles;
