import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../home/screens';
import {
  FirstHouseholdScreen,
  PersonScreen,
  SecondHouseholdScreen,
} from '../questions/screens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={HomeScreen} name="Home" />
      <Stack.Screen component={FirstHouseholdScreen} name="FirstHousehold" />
      <Stack.Screen component={SecondHouseholdScreen} name="SecondHousehold" />
      <Stack.Screen component={PersonScreen} name="Person" />
    </Stack.Navigator>
  );
};

export default HomeStack;
