import React from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {PeopleList} from '../components';
import { householdScreenStyles } from './styles';

const HouseholdScreen = ({householdBackend, people}) => {
  return (
    <View style={householdScreenStyles.mainView}>
      <Text style={householdScreenStyles.titleText}>Details about people</Text>
      <PeopleList people={people} />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    householdBackend: state.household.householdBackend,
    people: state.person.people,
  };
};

export default connect(mapStateToProps, null)(HouseholdScreen);
