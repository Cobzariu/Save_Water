import React from 'react';
import {FlatList} from 'react-native';
import PeopleItem from './PeopleItem';

const PeopleList = ({people}) => {
  return (
    <FlatList
      data={people}
      keyExtractor={(item) => item._id}
      showsVerticalScrollIndicator={false}
      renderItem={({item}) => <PeopleItem data={item} />}
    />
  );
};

export default PeopleList;
