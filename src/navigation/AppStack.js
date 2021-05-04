import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import TabBar from './TabBar';
import {EditHouseholdScreen, ManagePersonScreen} from '../home/screens';

const Stack = createStackNavigator();

const AppStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={TabBar} name="Home" />
      <Stack.Screen component={EditHouseholdScreen} name="EditHousehold" />
      <Stack.Screen component={ManagePersonScreen} name="ManagePerson" />
    </Stack.Navigator>
  );
};

export default AppStack;
