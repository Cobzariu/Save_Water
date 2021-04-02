import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {
  FirstHouseholdScreen,
  PersonScreen,
  SecondHouseholdScreen,
} from '../questions/screens';

const Stack = createStackNavigator();

const FormStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={FirstHouseholdScreen} name="FirstHousehold" />
      <Stack.Screen component={SecondHouseholdScreen} name="SecondHousehold" />
      <Stack.Screen component={PersonScreen} name="Person" />
    </Stack.Navigator>
  );
};
export default FormStack;
