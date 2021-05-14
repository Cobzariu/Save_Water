import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import {statsDetailsStyles} from './styles';

const StatsDetails = ({statistics, onPressWaterUsage, onPressWaterPoints}) => {
  const waterUsage =
    statistics.waterUsedPerCapitaLiters === -1 ? (
      <Text style={statsDetailsStyles.textStyleError}>
        You need to enter consumption data
      </Text>
    ) : (
      <>
        <Text style={statsDetailsStyles.textStyle}>Water usage</Text>

        <Text style={statsDetailsStyles.textStyleValue}>
          {statistics.waterUsedPerCapitaLiters} liters/person/day
        </Text>
      </>
    );
  const carUsage =
    statistics.carWashingLiters > 0 ? (
      <View style={statsDetailsStyles.item}>
        <Text style={statsDetailsStyles.textStyle}>Car washing</Text>
        <Text style={statsDetailsStyles.textStyleValue}>
          {statistics.carWashingLiters} liters/week
        </Text>
      </View>
    ) : null;

  const gardenUsage =
    statistics.wateringLiters > 0 ? (
      <View style={statsDetailsStyles.item}>
        <Text style={statsDetailsStyles.textStyle}>Garden usage</Text>
        <Text style={statsDetailsStyles.textStyleValue}>
          {statistics.wateringLiters} liters/week
        </Text>
      </View>
    ) : null;
  return (
    <View style={statsDetailsStyles.mainView}>
      <View style={statsDetailsStyles.secondView}>
        <View style={statsDetailsStyles.item}>
          <Text style={statsDetailsStyles.textStyle}>
            Average shower length
          </Text>
          <Text style={statsDetailsStyles.textStyleValue}>
            {statistics.averageShowerLength} minutes
          </Text>
        </View>
        <View style={statsDetailsStyles.item}>
          <Text style={statsDetailsStyles.textStyle}>Shower frequency</Text>
          <Text style={statsDetailsStyles.textStyleValue}>
            {statistics.averageShowerFrequency} times a week
          </Text>
        </View>
      </View>
      <View style={statsDetailsStyles.secondView}>
        <TouchableOpacity
          style={statsDetailsStyles.item}
          onPress={onPressWaterPoints}>
          <Text style={statsDetailsStyles.textStyle}>Bath frequency</Text>
          <Text style={statsDetailsStyles.textStyleValue}>
            {statistics.averageBathFrequency} times a week
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={statsDetailsStyles.item}
          disabled={statistics.waterUsedPerCapitaLiters === -1}
          onPress={onPressWaterUsage}>
          {statistics.waterUsedPerCapitaLiters !== -1 ? (
            <Feather
              name="info"
              size={20}
              color="white"
              style={statsDetailsStyles.infoIconStyle}
            />
          ) : null}
          {waterUsage}
        </TouchableOpacity>
      </View>
      <View style={statsDetailsStyles.secondView}>
        {carUsage}
        {gardenUsage}
      </View>
    </View>
  );
};

export default StatsDetails;
