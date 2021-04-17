import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HouseholdComponent, PeopleList} from '../components';
import {householdScreenStyles} from './styles';

const HouseholdScreen = ({householdBackend, people, navigation}) => {
  return (
    <View style={householdScreenStyles.mainView}>
      <HouseholdComponent data={householdBackend} />
      <View style={householdScreenStyles.addView}>
        <Text style={householdScreenStyles.titleText}>
          Details about people
        </Text>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('ManagePerson', {type: 'add'});
          }}>
          <Ionicons name="person-add-outline" size={25} />
        </TouchableOpacity>
      </View>

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
