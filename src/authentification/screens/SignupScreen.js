import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {connect} from 'react-redux';
import {signup, clearUserMessage} from '../../actions/user';
import {colors} from '../../core/themes';
import {GeneralButton, InputField, Spinner} from '../components';
import {signupScreenStyles} from './styles';

const SignupScreen = ({navigation, signup, message, clearUserMessage}) => {
  useEffect(() => {
    clearUserMessage();
  }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [isSecure, setIsSecure] = useState(true);
  return (
    <View style={signupScreenStyles.container}>
      <Spinner loading={loading} />
      <Text style={signupScreenStyles.logo}>Register</Text>
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
        icon={<Feather name="eye" size={22} color={colors.darkRed} />}
        onPressIcon={() => {
          setIsSecure(!isSecure);
        }}
      />
      {message ? (
        <Text style={signupScreenStyles.errorMessage}>{message}</Text>
      ) : null}
      <GeneralButton
        title="SIGNUP"
        onPress={() => {
          setLoading(true);
          signup(email, password).then(
            (success) => {
              setLoading(false);
              navigation.navigate('FirstHousehold');
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
          navigation.navigate('Signin');
        }}>
        <Text style={signupScreenStyles.signupText}>Signin</Text>
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
  signup,
  clearUserMessage,
})(SignupScreen);
