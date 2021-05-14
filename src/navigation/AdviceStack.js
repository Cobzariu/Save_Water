import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {AdviceScreen, DetailedStatsScreen, WaterPointsScreen} from '../home/screens';

const Stack = createStackNavigator();

const AdviceStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={AdviceScreen} name="Advice" />
      <Stack.Screen component={DetailedStatsScreen} name="DetailedStats" />
      <Stack.Screen component={WaterPointsScreen} name="WaterPoints" />
    </Stack.Navigator>
  );
};
export default AdviceStack;
