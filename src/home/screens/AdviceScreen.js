import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {View} from 'react-native';
import {getAdvices} from '../../actions/household';
import {FlatList} from 'react-native';
import {AdviceItem, StatsDetails} from '../components';
import {adviceScreenStyles} from './styles';
import {Spinner} from '../../authentification/components';

const AdviceScreen = ({advices, statistics, isLoading, getAdvices}) => {
  useEffect(() => {
    getAdvices();
  }, []);
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
export default connect(mapStateToProps, {getAdvices})(AdviceScreen);
