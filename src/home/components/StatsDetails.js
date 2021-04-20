import React from 'react';
import {View, Text} from 'react-native';
import {statsDetailsStyles} from './styles';

const StatsDetails = ({statistics}) => {
  const waterUsage =
    statistics.waterUsedPerCapitaLiters === -1 ? (
      <Text style={statsDetailsStyles.textStyleError}>You need to enter consumption data</Text>
    ) : (
      <>
        <Text style={statsDetailsStyles.textStyle}>Water usage</Text>
        <Text style={statsDetailsStyles.textStyleValue}>
          {statistics.waterUsedPerCapitaLiters} liters/person/day
        </Text>
      </>
    );
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
        <View style={statsDetailsStyles.item}>
          <Text style={statsDetailsStyles.textStyle}>Bath frequency</Text>
          <Text style={statsDetailsStyles.textStyleValue}>
            {statistics.averageBathFrequency} times a week
          </Text>
        </View>
        <View style={statsDetailsStyles.item}>
          {waterUsage}
        </View>
      </View>
    </View>
  );
};

export default StatsDetails;
