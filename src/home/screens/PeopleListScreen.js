import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {getPeople, deletePerson} from '../../actions/person';
import {getHousehold} from '../../actions/household';
import PeopleItem from '../components/PeopleItem';
import {FlatList, View, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../core/themes';
import {Spinner} from '../../authentification/components';
import {peopleListScreenStyles} from './styles';

const PeopleListScreen = ({
  people,
  navigation,
  getPeople,
  deletePerson,
  getHousehold,
  isLoading,
}) => {
  useEffect(() => {
    getPeople();
  }, []);
  return (
    <View style={peopleListScreenStyles.mainView}>
      <Spinner loading={isLoading} />
      <FlatList
        data={people}
        keyExtractor={(item) => item._id}
        renderItem={({item}) => (
          <PeopleItem
            data={item}
            onPress={() => {
              navigation.navigate('ManagePerson', {
                type: 'update',
                person: item,
              });
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
        ListHeaderComponent={
          <View style={peopleListScreenStyles.subView}>
            <View style={peopleListScreenStyles.addView}>
              <TouchableOpacity>
                <Ionicons
                  name="stats-chart"
                  size={25}
                  color={colors.darkRed}
                  onPress={() => {
                    navigation.navigate('WaterPoints');
                  }}
                />
              </TouchableOpacity>
              <Text style={peopleListScreenStyles.titleText}>
                People in your household
              </Text>
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate('ManagePerson', {type: 'add'});
                }}>
                <Ionicons
                  name="person-add-outline"
                  size={25}
                  color={colors.darkRed}
                />
              </TouchableOpacity>
            </View>
          </View>
        }
      />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    people: state.person.people,
    isLoading: state.person.isLoading,
  };
};

export default connect(mapStateToProps, {
  getPeople,
  deletePerson,
  getHousehold,
})(PeopleListScreen);
