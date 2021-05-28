import React, {useEffect, useState} from 'react';
import {StackedBarChart} from 'react-native-chart-kit';
import {View, Text, Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {getWaterPoints} from '../../actions/household';
import {Spinner} from '../../authentification/components';
import {waterPointsScreenStyles} from './styles';
import {colors} from '../../core/themes';

const WaterPointsScreen = ({isLoading, waterPoints, getWaterPoints}) => {
  const [labels, setLabels] = useState([]);
  const [data, setData] = useState([]);

  const HEIGHT = 220;
  const WIDTH = Dimensions.get('screen').width - 10;
  const legend = ['Shower points', 'Bath points', 'Other points'];

  function computeData() {
    if (waterPoints) {
      setLabels(waterPoints.map((item) => item.personName));
      var data = [];
      waterPoints.forEach((item) => {
        var localArray = [];
        if (item.showerPoints > 0) localArray.push(item.showerPoints);
        else localArray.push(null);
        if (item.bathPoints > 0) localArray.push(item.bathPoints);
        else localArray.push(null);
        if (item.otherPoints > 0) localArray.push(item.otherPoints);
        else localArray.push(null);
        data.push(localArray);
      });
      setData(data);
    }
  }
  useEffect(() => {
    getWaterPoints();
  }, []);
  useEffect(() => {
    computeData();
  }, [waterPoints]);
  return (
    <View style={waterPointsScreenStyles.mainView}>
      <Spinner loading={isLoading} />
      <Text style={waterPointsScreenStyles.mainTitleText}>Water Points</Text>
      <View style={waterPointsScreenStyles.chartView}>
        <StackedBarChart
          width={WIDTH}
          height={HEIGHT}
          data={{
            labels: labels,
            legend: legend,
            data: data,
            barColors: ['#dbdbdb', '#bababa', '#999999'],
          }}
          chartConfig={{
            backgroundColor: colors.darkRed,
            backgroundGradientFrom: '#ff8685',
            backgroundGradientTo: '#ff6261',
            color: (opacity = 1) => `rgba(0, 63, 92, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 63, 92, ${opacity})`,
            strokeWidth: 2, // optional, default 3
            barPercentage: 0.5,
            propsForDots: {
              r: '5',
              strokeWidth: '2',
              stroke: colors.darkBlue,
            },
          }}
          style={{borderRadius: 10}}
        />
        <Text style={waterPointsScreenStyles.infoText}>
          Water points are calculated after each person's use of water. A lower
          number indicates a smaller amount of water consumption.
        </Text>
      </View>
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
