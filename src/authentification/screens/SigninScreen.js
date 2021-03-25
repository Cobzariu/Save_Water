import React, {useState} from 'react';
import {View} from 'react-native';
import {Text, Button, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {login} from '../../actions/user';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {signinScreenStyles} from './styles';

const SigninScreen = ({navigation, message, login}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <View style={signinScreenStyles.container}>
      <Text h3>Sign in</Text>
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
        title={'Login'}
        onPress={() => {
          login(email, password).then(
            (success) => {
              console.log('SUCCESS');
              navigation.navigate('Home', {screen: 'Home'});
            },
            (error) => {
              console.log('INSUCCESS');
            },
          );
        }}
      />
      {message ? (
        <Text style={signinScreenStyles.errorMessage}>{message}</Text>
      ) : null}
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('Signup');
        }}>
        <Text>Dont have an account? Sign up instead</Text>
      </TouchableOpacity>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
    message: state.user.message,
  };
};

export default connect(mapStateToProps, {
  login,
})(SigninScreen);
