import React, {useEffect, useState} from 'react';
import {connect} from 'react-redux';
import {View, RefreshControl, FlatList} from 'react-native';
import {getAdvices} from '../../actions/household';
import {AdviceItem, StatsDetails} from '../components';
import {adviceScreenStyles} from './styles';
import {Spinner} from '../../authentification/components';

const AdviceScreen = ({advices, statistics, isLoading, getAdvices}) => {
  const [loadingType, setLoadingType] = useState('');
  useEffect(() => {
    setLoadingType('fetch');
    getAdvices().then(
      (succ) => {
        setLoadingType('');
      },
      (err) => {
        setLoadingType('');
      },
    );
  }, []);
  return (
    <View style={adviceScreenStyles.mainView}>
      <Spinner
        loading={loadingType === 'fetch'}
      />
      <FlatList
        style={adviceScreenStyles.listStyle}
        data={advices}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <AdviceItem data={item} />}
        ListHeaderComponent={
          statistics ? <StatsDetails statistics={statistics} /> : null
        }
        refreshControl={
          <RefreshControl
            colors={['#f35588']}
            refreshing={loadingType === 'refresh'}
            onRefresh={() => {
              setLoadingType('refresh');
              getAdvices().then(
                (succ) => {
                  setLoadingType('');
                },
                (error) => {
                  setLoadingType('');
                },
              );
            }}
          />
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
