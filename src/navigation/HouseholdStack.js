import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {HouseholdScreen, EditHouseholdScreen} from '../home/screens';

const Stack = createStackNavigator();

const HouseholdStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={HouseholdScreen} name="Household" />
      <Stack.Screen component={EditHouseholdScreen} name="EditHousehold" />
    </Stack.Navigator>
  );
};
export default HouseholdStack;
