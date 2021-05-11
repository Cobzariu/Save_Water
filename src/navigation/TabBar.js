import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {
  AdviceScreen,
  HouseholdScreen,
  UsageListScreen,
} from '../home/screens';
import {colors} from '../core/themes';
import { PeopleList } from '../home/components';

const Tab = createBottomTabNavigator();

const TabBar = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
      }}
      tabBarOptions={{
        activeTintColor: colors.darkRed,
        inactiveTintColor: colors.darkBlue,
        labelStyle: {
          fontSize: 12,
          fontFamily: 'Roboto-Regular'
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
        component={UsageListScreen}
        name="Consumption"
        options={{
          tabBarIcon: ({size, color}) => (
            <MaterialIcons name="data-usage" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={PeopleList}
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
