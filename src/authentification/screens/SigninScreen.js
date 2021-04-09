import React, {useState, useEffect} from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {login, clearUserMessage} from '../../actions/user';
import {signinScreenStyles} from './styles';
import {GeneralButton, InputField} from '../components';

const SigninScreen = ({navigation, message, login, clearUserMessage}) => {
  useEffect(() => {
    clearUserMessage();
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={signinScreenStyles.container}>
      <Text style={signinScreenStyles.logo}>Welcome</Text>
      <InputField
        onChangeText={(e) => setEmail(e)}
        placeholder="Email"
        value={email}
      />
      <InputField
        onChangeText={(e) => setPassword(e)}
        placeholder="Password"
        secureTextEntry
        value={password}
      />
      {message ? (
        <Text style={signinScreenStyles.errorMessage}>{message}</Text>
      ) : null}
      <GeneralButton
        title="LOGIN"
        onPress={() => {
          login(email, password).then(
            (success) => {
              //console.log('SUCCESS');
            },
            (error) => {
              //console.log('INSUCCESS');
            },
          );
        }}
      />
      <TouchableOpacity
        onPress={() => {
          clearUserMessage();
          navigation.navigate('Signup');
        }}>
        <Text style={signinScreenStyles.signupText}>Signup</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    message: state.user.message,
  };
};

export default connect(mapStateToProps, {
  login,
  clearUserMessage,
})(SigninScreen);
