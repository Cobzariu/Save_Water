import React from 'react';
import {connect} from 'react-redux';
import {View, Text, Button} from 'react-native';
import {FlatList} from 'react-native';
import {AdviceItem} from '../components';
import { adviceScreenStyles } from './styles';

const AdviceScreen = ({advices, statistics}) => {
  return (
    <View style={adviceScreenStyles.mainView}>
      <FlatList
        style={adviceScreenStyles.listStyle}
        data={advices}
        keyExtractor={(item, index) => index}
        renderItem={({item}) => <AdviceItem data={item} />}
      />
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    advices: state.household.advices,
    statistics: state.household.statistics,
  };
};
export default connect(mapStateToProps, null)(AdviceScreen);
