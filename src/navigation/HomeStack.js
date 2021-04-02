import React, {useEffect} from 'react';
import {getHousehold} from '../actions/household';
import {connect} from 'react-redux';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from '../home/screens';
import FormStack from './FormStack';
import MainHomeStack from './MainHomeStack';

const Stack = createStackNavigator();

const HomeStack = ({getHousehold, formCompleted}) => {
  useEffect(() => {
    getHousehold();
  }, []);

  console.log('Form is completed: ' + formCompleted);
  return <>{formCompleted ? <MainHomeStack /> : <FormStack />}</>;
};
const mapStateToProps = (state) => {
  return {
    formCompleted: state.household.formCompleted,
  };
};
export default connect(mapStateToProps, {getHousehold})(HomeStack);
