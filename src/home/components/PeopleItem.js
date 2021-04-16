import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {peopleItemStyles} from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const PeopleItem = ({data}) => {
  const waterRunninMessage = data.waterRunningBrushingTeeth ? 'Yes' : 'No';
  return (
    <View style={peopleItemStyles.mainView}>
      <View>
        <View style={peopleItemStyles.subView}>
          <Text style={peopleItemStyles.titleText}>Name</Text>
          <Text style={peopleItemStyles.valueText}>{data.name}</Text>
        </View>
        <View style={peopleItemStyles.subView}>
          <Text style={peopleItemStyles.titleText}>Showers per week</Text>
          <Text style={peopleItemStyles.valueText}>
            {data.showerNumberWeek}
          </Text>
        </View>
        <View style={peopleItemStyles.subView}>
          <Text style={peopleItemStyles.titleText}>Baths per week</Text>
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
      <View>
        <TouchableOpacity>
          <MaterialCommunityIcons name="delete" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PeopleItem;
