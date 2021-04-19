import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {FlatList} from 'react-native';
import {AdviceItem, StatsDetails} from '../components';
import {adviceScreenStyles} from './styles';
import {Spinner} from '../../authentification/components';

const AdviceScreen = ({advices, statistics,isLoading}) => {
  return (
    <View style={adviceScreenStyles.mainView}>
      <Spinner loading={isLoading} />
      <FlatList
        style={adviceScreenStyles.listStyle}
        data={advices}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <AdviceItem data={item} />}
        ListHeaderComponent={
          statistics ? <StatsDetails statistics={statistics} /> : null
        }
      />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    advices: state.household.advices,
    statistics: state.household.statistics,
    isLoading: state.household.isLoading,
  };
};
export default connect(mapStateToProps, null)(AdviceScreen);
