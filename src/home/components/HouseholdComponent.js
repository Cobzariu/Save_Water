import React from 'react';
import {View, Text} from 'react-native';
import {householdComponentStyle} from './styles';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const HouseholdComponent = ({data}) => {
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
      <Text style={householdComponentStyle.subTitleText}>Indoors</Text>
      <View style={householdComponentStyle.subView}>
        <Text style={householdComponentStyle.titleText}>Location type</Text>
        <MaterialIcons name={iconName} size={25} />
      </View>
      <View style={householdComponentStyle.subView}>
        <Text style={householdComponentStyle.titleText}>People</Text>
        <Text style={householdComponentStyle.valueText}>
          {data.personNumber}
        </Text>
      </View>
      <View style={householdComponentStyle.subView}>
        <Text style={householdComponentStyle.titleText}>
          Using the washing machine per week
        </Text>
        <Text style={householdComponentStyle.valueText}>
          {data.washingMachineNumberWeek}
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
          Wash the dishes by hand each week
        </Text>
        <Text style={householdComponentStyle.valueText}>
          {data.washHandNumberWeek}
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
          Using the dishwasher per week
        </Text>
        <Text style={householdComponentStyle.valueText}>
          {data.dishwasherNumberWeek}
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
              Washing the car per week
            </Text>
            <Text style={householdComponentStyle.valueText}>
              {data.washCarNumberWeek}
            </Text>
          </View>
          <View style={householdComponentStyle.subView}>
            <Text style={householdComponentStyle.titleText}>
              Watering the garden per week
            </Text>
            <Text style={householdComponentStyle.valueText}>
              {data.waterGardenNumberWeek}
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
