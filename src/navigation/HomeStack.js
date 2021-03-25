import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import { HomeScreen } from '../home/screens';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={HomeScreen} name="Home" />
    </Stack.Navigator>
  );
};

export default HomeStack;
