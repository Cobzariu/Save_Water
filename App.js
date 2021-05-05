import React, {useEffect, useState} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {PersistGate} from 'redux-persist/integration/react';
import {Provider} from 'react-redux';
import AppNavigator from './src/navigation/AppNavigator';
import configureStore from './src/configureStore';
import {SplashScreen} from './src/core/screens';

const {persistor, store} = configureStore();

const App = () => {
  useEffect(() => {
    //AsyncStorage.clear();
    //persistor.purge();
  }, []);
  return (
    <Provider store={store}>
      <PersistGate loading={<SplashScreen />} persistor={persistor}>
        <AppNavigator />
      </PersistGate>
    </Provider>
  );
};

export default App;
