import React from 'react';
import {connect} from 'react-redux';
import {getPeople, deletePerson} from '../../actions/person';
import {getHousehold} from '../../actions/household';
import PeopleItem from './PeopleItem';
import {FlatList} from 'react-native';

const PeopleList = ({
  people,
  navigation,
  getPeople,
  deletePerson,
  getHousehold,
}) => {
  return (
    <FlatList
      data={people}
      keyExtractor={(item) => item._id}
      renderItem={({item}) => (
        <PeopleItem
          data={item}
          onPress={() => {
            navigation.navigate('ManagePerson', {type: 'update', person: item});
          }}
          onPressDelete={() => {
            deletePerson(item._id).then(
              (succ) => {
                getPeople();
                getHousehold();
              },
              (fail) => {},
            );
          }}
        />
      )}
    />
  );
};

export default connect(null, {getPeople, deletePerson, getHousehold})(
  PeopleList,
);
