import React, {useEffect, useState} from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/configureStore';
import AppNavigator from './src/navigation/AppNavigator';
import { FirstHouseholdScreen, PersonScreen, SecondHouseholdScreen } from './src/questions/screens';

const App = () => {
  return (
    <Provider store={configureStore}>
      <FirstHouseholdScreen />
    </Provider>
  );
};
export default App;
