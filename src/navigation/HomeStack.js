import React, {useEffect} from 'react';
import {getHousehold} from '../actions/household';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../home/screens';

const Stack = createStackNavigator();

const HomeStack = ({getHousehold}) => {
  useEffect(() => {
    getHousehold();
  }, []);

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen component={HomeScreen} name="Home" />
    </Stack.Navigator>
  );
};

export default connect(null, {getHousehold})(HomeStack);
