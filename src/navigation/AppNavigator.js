import React, {useEffect} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import TabBar from './TabBar';
import AuthStack from './AuthStack';
import {tryLocalSignIn} from '../actions/user';

const AppNavigator = ({loggedIn, tryLocalSignIn}) => {
  useEffect(() => {
    tryLocalSignIn();
  }, []);
  return (
    <NavigationContainer>
      {loggedIn ? <TabBar /> : <AuthStack />}
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
  };
};
export default connect(mapStateToProps, {tryLocalSignIn})(AppNavigator);
