import React, {useState, useEffect} from 'react';
import Feather from 'react-native-vector-icons/Feather';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {View, TouchableOpacity, Text} from 'react-native';
import {connect} from 'react-redux';
import {login, clearUserMessage} from '../../actions/user';
import {signinScreenStyles} from './styles';
import {GeneralButton, InputField, Spinner} from '../components';
import {colors} from '../../core/themes';

const SigninScreen = ({navigation, message, login, clearUserMessage}) => {
  useEffect(() => {
    clearUserMessage();
  }, []);
  useEffect(() => {
    return () => {
      setLoading(false);
    };
  }, []);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSecure, setIsSecure] = useState(true);
  return (
    <View style={signinScreenStyles.container}>
      <Spinner loading={loading} />
      <Text style={signinScreenStyles.logo}>Welcome</Text>
      <InputField
        onChangeText={(e) => setEmail(e)}
        placeholder="Email"
        autoCapitalize={'none'}
        value={email}
      />
      <InputField
        onChangeText={(e) => setPassword(e)}
        placeholder="Password"
        secureTextEntry={isSecure}
        value={password}
        iconShow={
          <Ionicons name="ios-eye-outline" size={22} color={colors.darkRed} />
        }
        iconHide={
          <Ionicons
            name="ios-eye-off-outline"
            size={22}
            color={colors.darkRed}
          />
        }
        onPressIcon={() => {
          setIsSecure(!isSecure);
        }}
      />
      {message ? (
        <Text style={signinScreenStyles.errorMessage}>{message}</Text>
      ) : null}
      <GeneralButton
        title="LOGIN"
        onPress={() => {
          setLoading(true);
          login(email, password).then(
            (success) => {
              setLoading(false);
            },
            (error) => {
              setLoading(false);
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
