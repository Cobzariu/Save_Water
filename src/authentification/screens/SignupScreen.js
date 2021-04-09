import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {connect} from 'react-redux';
import {signup, clearUserMessage} from '../../actions/user';
import {GeneralButton, InputField} from '../components';
import {signupScreenStyles} from './styles';

const SignupScreen = ({navigation, signup, message, clearUserMessage}) => {
  useEffect(() => {
    clearUserMessage();
  }, []);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={signupScreenStyles.container}>
      <Text style={signupScreenStyles.logo}>Register</Text>
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
        <Text style={signupScreenStyles.errorMessage}>{message}</Text>
      ) : null}
      <GeneralButton
        title="SIGNUP"
        onPress={() => {
          signup(email, password).then(
            (success) => {
              //console.log('SUCCESS');
              navigation.navigate('FirstHousehold');
            },
            (error) => {
              //console.log(error);
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
    // <View style={signupScreenStyles.container}>
    //   <Text h3>Sign up</Text>
    //   <Input
    //     label="Email"
    //     value={email}
    //     onChangeText={setEmail}
    //     autoCapitalize="none"
    //     autoCorrect={false}
    //   />
    //   <Input
    //     secureTextEntry
    //     label="Password"
    //     value={password}
    //     onChangeText={setPassword}
    //     autoCapitalize="none"
    //     autoCorrect={false}
    //   />
    //   <Button
    //     title={'Sign up'}
    //     onPress={() => {
    //       signup(email, password).then(
    //         (success) => {
    //           console.log('SUCCESS in Sign up');
    //           navigation.navigate('FirstHousehold');
    //         },
    //         (error) => {
    //           console.log('INSUCCESS in Sign up');
    //         },
    //       );
    //     }}
    //   />
    //   {message ? (
    //     <Text style={signupScreenStyles.errorMessage}>{message}</Text>
    //   ) : null}
    // </View>
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
