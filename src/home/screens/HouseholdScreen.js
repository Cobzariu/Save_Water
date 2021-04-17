import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HouseholdComponent, PeopleList} from '../components';
import {householdScreenStyles} from './styles';
import { ScrollView } from 'react-native';

const HouseholdScreen = ({householdBackend, people, navigation}) => {
  return (
    <ScrollView style={householdScreenStyles.mainView}>
      <View style={householdScreenStyles.subView}>
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
        <View style={householdScreenStyles.listView}>
          <PeopleList people={people} navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
};
const mapStateToProps = (state) => {
  return {
    householdBackend: state.household.householdBackend,
    people: state.person.people,
  };
};

export default connect(mapStateToProps, null)(HouseholdScreen);
