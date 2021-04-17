import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {ManagePersonScreen, PeopleScreen} from '../home/screens';

const Stack = createStackNavigator();

const PersonStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={PeopleScreen} name="People" />
      <Stack.Screen component={ManagePersonScreen} name="ManagePerson" />
    </Stack.Navigator>
  );
};

export default PersonStack;
