import React from 'react';
import {connect} from 'react-redux';
import {getPeople, deletePerson} from '../../actions/person';
import {getHousehold} from '../../actions/household';
import PeopleItem from './PeopleItem';

const PeopleList = ({
  people,
  navigation,
  getPeople,
  deletePerson,
  getHousehold,
}) => {
  return people.map((item) => {
    return (
      <PeopleItem
        key={item._id}
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
    );
  });
};

export default connect(null, {getPeople, deletePerson, getHousehold})(
  PeopleList,
);
