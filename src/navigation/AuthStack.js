import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {SigninScreen, SignupScreen} from '../authentification/screens';
import {
  FirstHouseholdScreen,
  PersonScreen,
  SecondHouseholdScreen,
} from '../questions/screens';

const Stack = createStackNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={SigninScreen} name="Sigin" />
      <Stack.Screen component={SignupScreen} name="Signup" />
      <Stack.Screen component={FirstHouseholdScreen} name="FirstHousehold" />
      <Stack.Screen component={SecondHouseholdScreen} name="SecondHousehold" />
      <Stack.Screen component={PersonScreen} name="Person" />
    </Stack.Navigator>
  );
};

export default AuthStack;
