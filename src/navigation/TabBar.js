import React, {useEffect} from 'react';
import {getHousehold, getUsages} from '../actions/household';
import {connect} from 'react-redux';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AccountScreen,
  AdviceScreen,
  ConsumptionScreen,
  HouseholdScreen,
} from '../home/screens';
import UsageList from '../home/screens/UsageList';

const Tab = createBottomTabNavigator();

const TabBar = ({getHousehold, getUsages}) => {
  useEffect(() => {
    getHousehold();
    getUsages();
  }, []);

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: '#1f55de',
        inactiveTintColor: 'grey',
        labelStyle: {
          fontSize: 12,
        },
      }}>
      <Tab.Screen
        component={AdviceScreen}
        name="Advice"
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome5 name="hand-holding-water" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={UsageList}
        name="Consumption"
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name="data-usage" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={HouseholdScreen}
        name="Household"
        options={{
          tabBarIcon: ({size, color}) => (
            <FontAwesome5 name="house-user" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={AccountScreen}
        name="Account"
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialCommunityIcons name="account" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default connect(null, {getHousehold, getUsages})(TabBar);
