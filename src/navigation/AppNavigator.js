import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {connect} from 'react-redux';
import AuthStack from './AuthStack';
import AppStack from './AppStack';

const AppNavigator = ({loggedIn}) => {
  return (
    <NavigationContainer>
      {loggedIn ? <AppStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
const mapStateToProps = (state) => {
  return {
    loggedIn: state.user.loggedIn,
  };
};
export default connect(mapStateToProps, null)(AppNavigator);
