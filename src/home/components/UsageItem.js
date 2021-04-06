import React from 'react';
import {months} from '../../utils/variables';
import {View, Text} from 'react-native';
import {usageItemStyles} from './styles';

const UsageItem = ({data}) => {
    function getMonth(month){

    }
  return (
    <View style={usageItemStyles.mainView}>
      <View style={usageItemStyles.subView}>
        <Text style={usageItemStyles.titleText}>Usage</Text>
        <Text style={usageItemStyles.valueText}>{data.amount} m</Text>
        <Text style={usageItemStyles.superScriptText}>3</Text>
      </View>
      <View style={usageItemStyles.subView}>
      <Text style={usageItemStyles.titleText}>Month</Text>
        <Text style={usageItemStyles.valueText}>{months[data.month]}</Text>
      </View>
      <View style={usageItemStyles.subView}>
      <Text style={usageItemStyles.titleText}>Year</Text>
        <Text style={usageItemStyles.valueText}>{data.year}</Text>
      </View>
    </View>
  );
};

export default UsageItem;
