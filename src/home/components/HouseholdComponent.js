import React from 'react';
import {View, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {householdComponentStyle} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {TouchableOpacity} from 'react-native';
import { colors } from '../../core/themes';

const HouseholdComponent = ({data, onPress}) => {
  const iconName = data.locationTypeHouse ? 'house' : 'apartment';
  const fullyLoad = data.washingMachineFullLoad ? 'Yes' : 'No';
  const bowlWashing = data.bowlWashing ? 'Yes' : 'No';
  const dualFlush = data.toiletDualFlush ? 'Yes' : 'No';
  const collectRainWater = data.collectRainwater ? 'Yes' : 'No';
  return (
    <View style={householdComponentStyle.mainView}>
      <Text style={householdComponentStyle.mainTitleText}>
        Household details
      </Text>
      <View style={householdComponentStyle.editView}>
        <Text style={householdComponentStyle.subTitleText}>Indoors</Text>
        <TouchableOpacity onPress={onPress}>
          <AntDesign name="edit" size={35} color={colors.darkRed} />
        </TouchableOpacity>
      </View>
      <View style={householdComponentStyle.subView}>
        <Text style={householdComponentStyle.titleText}>Location type</Text>
        <MaterialIcons name={iconName} size={30} color="black" />
      </View>
      <View style={householdComponentStyle.subView}>
        <Text style={householdComponentStyle.titleText}>People</Text>
        <Text style={householdComponentStyle.valueText}>
          {data.personNumber}
        </Text>
      </View>
      <View style={householdComponentStyle.subView}>
        <Text style={householdComponentStyle.titleText}>
          Using the washing machine each week
        </Text>
        <Text style={householdComponentStyle.valueText}>
          {data.washingMachineNumberWeek} times
        </Text>
      </View>
      <View style={householdComponentStyle.subView}>
        <Text style={householdComponentStyle.titleText}>
          Fully load the washing machine
        </Text>
        <Text style={householdComponentStyle.valueText}>{fullyLoad}</Text>
      </View>
      <View style={householdComponentStyle.subView}>
        <Text style={householdComponentStyle.titleText}>
          Washing the dishes by hand each week
        </Text>
        <Text style={householdComponentStyle.valueText}>
          {data.washHandNumberWeek} times
        </Text>
      </View>
      <View style={householdComponentStyle.subView}>
        <Text style={householdComponentStyle.titleText}>
          Using a bowl for cleaning dishes
        </Text>
        <Text style={householdComponentStyle.valueText}>{bowlWashing}</Text>
      </View>
      <View style={householdComponentStyle.subView}>
        <Text style={householdComponentStyle.titleText}>
          Using the dishwasher each week
        </Text>
        <Text style={householdComponentStyle.valueText}>
          {data.dishwasherNumberWeek} times
        </Text>
      </View>
      <View style={householdComponentStyle.subView}>
        <Text style={householdComponentStyle.titleText}>
          Owning dual flush toilets
        </Text>
        <Text style={householdComponentStyle.valueText}>{dualFlush}</Text>
      </View>
      {data.locationTypeHouse ? (
        <View style={householdComponentStyle.outdoorView}>
          <Text style={householdComponentStyle.subTitleText}>Outdoors</Text>
          <View style={householdComponentStyle.subView}>
            <Text style={householdComponentStyle.titleText}>
              Washing the car each week
            </Text>
            <Text style={householdComponentStyle.valueText}>
              {data.washCarNumberWeek} times
            </Text>
          </View>
          <View style={householdComponentStyle.subView}>
            <Text style={householdComponentStyle.titleText}>
              Watering the garden each week
            </Text>
            <Text style={householdComponentStyle.valueText}>
              {data.waterGardenNumberWeek} times
            </Text>
          </View>
          <View style={householdComponentStyle.subView}>
            <Text style={householdComponentStyle.titleText}>
              Length of the watering
            </Text>
            <Text style={householdComponentStyle.valueText}>
              {data.waterGardenLength} minutes
            </Text>
          </View>
          <View style={householdComponentStyle.subView}>
            <Text style={householdComponentStyle.titleText}>
              Collect rainwater
            </Text>
            <Text style={householdComponentStyle.valueText}>
              {collectRainWater}
            </Text>
          </View>
        </View>
      ) : null}
    </View>
  );
};

export default HouseholdComponent;
