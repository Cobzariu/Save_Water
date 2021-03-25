import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {signup} from '../../actions/user';
import {signupScreenStyles} from './styles';

const SignupScreen = ({navigation, signup, message}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={signupScreenStyles.container}>
      <Text h3>Sign up</Text>
      <Input
        label="Email"
        value={email}
        onChangeText={setEmail}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Input
        secureTextEntry
        label="Password"
        value={password}
        onChangeText={setPassword}
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Button
        title={'Sign up'}
        onPress={() => {
          signup(email, password).then(
            (success) => {
              console.log('SUCCESS');
              navigation.navigate('Home');
            },
            (error) => {
              console.log('INSUCCESS');
            },
          );
        }}
      />
      {message ? (
        <Text style={signupScreenStyles.errorMessage}>{message}</Text>
      ) : null}
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
})(SignupScreen);
