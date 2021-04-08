import React from 'react';
import {View, Text} from 'react-native';
import {CheckBox} from 'react-native-elements';
import {peopleItemStyles} from './styles';

const PeopleItem = ({data}) => {
  const waterRunninMessage = data.waterRunningBrushingTeeth ? 'Yes' : 'No';
  return (
    <View style={peopleItemStyles.mainView}>
      <View style={peopleItemStyles.subView}>
        <Text style={peopleItemStyles.titleText}>Name</Text>
        <Text style={peopleItemStyles.valueText}>{data.name}</Text>
      </View>
      <View style={peopleItemStyles.subView}>
        <Text style={peopleItemStyles.titleText}>
          Number of showers per week
        </Text>
        <Text style={peopleItemStyles.valueText}>{data.showerNumberWeek}</Text>
      </View>
      <View style={peopleItemStyles.subView}>
        <Text style={peopleItemStyles.titleText}>Number of baths per week</Text>
        <Text style={peopleItemStyles.valueText}>{data.bathNumberWeek}</Text>
      </View>
      <View style={peopleItemStyles.subView}>
        <Text style={peopleItemStyles.titleText}>Length of a shower</Text>
        <Text style={peopleItemStyles.valueText}>
          {data.showerLengthMinutes} minutes
        </Text>
      </View>
      <View style={peopleItemStyles.subView}>
        <Text style={peopleItemStyles.titleText}>Leaves tap open</Text>
        <Text style={peopleItemStyles.valueText}>{waterRunninMessage}</Text>
      </View>
    </View>
  );
};

export default PeopleItem;
