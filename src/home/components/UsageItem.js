import React from 'react';
import {months} from '../../utils/variables';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {View, Text} from 'react-native';
import {usageItemStyles} from './styles';
import {TouchableOpacity} from 'react-native';

const UsageItem = ({data, onPress}) => {
  return (
    <View style={usageItemStyles.mainView}>
      <View>
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
      <View>
        <TouchableOpacity onPress={onPress}>
          <MaterialCommunityIcons name="delete" size={25} color="#fb5b5a" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UsageItem;
