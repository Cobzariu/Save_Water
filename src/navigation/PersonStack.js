import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HouseholdScreen, ManagePersonScreen} from '../home/screens';

const Stack = createStackNavigator();

const PersonStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={HouseholdScreen} name="Household" />
      <Stack.Screen component={ManagePersonScreen} name="ManagePerson" />
    </Stack.Navigator>
  );
};

export default PersonStack;
