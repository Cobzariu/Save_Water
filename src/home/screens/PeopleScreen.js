import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {getPeople} from '../../actions/person';
import {View, Text, TouchableOpacity} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {PeopleList} from '../components';
import {peopleScreenStyles} from './styles';
import {ScrollView} from 'react-native';
import {Spinner} from '../../authentification/components';

const PeopleScreen = ({people, navigation, getPeople, isLoading}) => {
  useEffect(() => {
    getPeople();
  }, []);
  return (
    <ScrollView style={peopleScreenStyles.mainView}>
      <Spinner loading={isLoading} />
      <View style={peopleScreenStyles.subView}>
        <View style={peopleScreenStyles.addView}>
          <Text style={peopleScreenStyles.titleText}>Details about people</Text>
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
    people: state.person.people,
    isLoading: state.person.isLoading,
  };
};

export default connect(mapStateToProps, {getPeople})(PeopleScreen);
