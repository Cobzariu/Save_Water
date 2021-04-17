import React from 'react';
import {connect} from 'react-redux';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {HouseholdComponent, PeopleList} from '../components';
import {peopleScreenStyles} from './styles';
import { ScrollView } from 'react-native';

const PeopleScreen = ({people, navigation}) => {
  return (
    <ScrollView style={peopleScreenStyles.mainView}>
      <View style={peopleScreenStyles.subView}>
        {/* <HouseholdComponent data={householdBackend} /> */}
        <View style={peopleScreenStyles.addView}>
          <Text style={peopleScreenStyles.titleText}>
            Details about people
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ManagePerson', {type: 'add'});
            }}>
            <Ionicons name="person-add-outline" size={25} />
          </TouchableOpacity>
        </View>
        <View style={peopleScreenStyles.listView}>
          <PeopleList people={people} navigation={navigation} />
        </View>
      </View>
    </ScrollView>
  );
};
const mapStateToProps = (state) => {
  return {
    //householdBackend: state.household.householdBackend,
    people: state.person.people,
  };
};

export default connect(mapStateToProps, null)(PeopleScreen);
