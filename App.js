import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';
import AppNavigator from './src/navigation/AppNavigator';

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
