import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';
import { ManagePersonScreen } from './src/home/screens';
import AppNavigator from './src/navigation/AppNavigator';
import { FirstHouseholdScreen, PersonScreen, SecondHouseholdScreen } from './src/questions/screens';
import { Spinner } from './src/authentification/components';

const App = () => {
  useEffect(()=> {
    // /AsyncStorage.clear();
  },[]);
  return (
    <Provider store={configureStore}>
      <AppNavigator />
    </Provider>
  );
};

export default App;
