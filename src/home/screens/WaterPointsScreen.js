import React, {useEffect, useState} from 'react';
import {StackedBarChart} from 'react-native-chart-kit';
import {View, Text, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {getWaterPoints} from '../../actions/household';
import {Spinner} from '../../authentification/components';

const WaterPointsScreen = ({isLoading, waterPoints, getWaterPoints}) => {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    getWaterPoints();
  }, []);
  useEffect(() => {
    computeData();
  }, [waterPoints]);
  const HEIGHT = 220;
  const legend = ['Shower points', 'Bath points', 'Other points'];
  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false, // optional
  };
  function computeData() {
    setLabels(waterPoints.map((item) => item.personName));
    var data = [];
    waterPoints.forEach((item) => {
      //data.push([item.showerPoints, item.bathPoints, item.otherPoints]);
      var localArray = [];
      if (item.showerPoints > 0) localArray.push(item.showerPoints);
      if (item.bathPoints > 0) localArray.push(item.bathPoints);
      if (item.otherPoints > 0) localArray.push(item.otherPoints);
      data.push(localArray);
    });
    setData(data);
  }
  console.log('data', data);
  return (
    <View>
      <Spinner loading={isLoading} />
      <StackedBarChart
        width={Dimensions.get('screen').width}
        height={HEIGHT}
        data={{
          labels: labels,
          legend: legend,
          data: data,
          barColors: ['red', 'green', 'yellow'],
        }}
        chartConfig={chartConfig}
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    waterPoints: state.household.waterPoints,
    isLoading: state.household.isLoading,
  };
};
export default connect(mapStateToProps, {getWaterPoints})(WaterPointsScreen);
