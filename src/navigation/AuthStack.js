import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SigninScreen, SignupScreen} from '../authentification/screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={SigninScreen} name="Sigin" />
      <Stack.Screen component={SignupScreen} name="Signup" />
    </Stack.Navigator>
  );
};

export default AuthStack;
