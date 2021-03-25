import React, {useEffect, useState} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import {SigninScreen, SignupScreen} from './src/authentification/screens';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';
import {HomeScreen} from './src/home/screens';
import AppNavigator from './src/navigation/AppNavigator';

const store = configureStore();
const App = () => {
  return (
    <Provider store={store}>
      <AppNavigator />
    </Provider>
  );
};
export default App;
