import React from 'react';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {AdviceScreen, HouseholdScreen, PeopleScreen, UsageList} from '../home/screens';
import PersonStack from './PersonStack';
import HouseholdStack from './HouseholdStack';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: '#fb5b5a',
        inactiveTintColor: '#003f5c',
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
        component={PeopleScreen}
        name="People"
        options={{
          tabBarIcon: ({size, color}) => (
            <Ionicons name="people" size={size} color={color} />
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
    </Tab.Navigator>
  );
};

export default TabBar;
