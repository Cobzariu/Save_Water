import React, {useEffect, useState} from 'react';
import {View, Dimensions, TouchableOpacity, Text} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import {months} from '../../utils/variables';
import {chartComponentStyles} from './styles';

const ChartCompnent = ({usages}) => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [chartData, setChartData] = useState([]);
  const [chartLabels, setChartLabels] = useState([]);
  const graphic =
    chartData.length > 0 ? (
      <LineChart
        data={{
          labels: chartLabels,
          datasets: [
            {
              data: chartData,
            },
          ],
        }}
        width={Dimensions.get('screen').width + 1}
        height={220}
        yAxisSuffix="m3"
        chartConfig={{
          backgroundColor: '#fb5b5a',
          backgroundGradientFrom: '#ff8685',
          backgroundGradientTo: '#ff6261',
          decimalPlaces: 0,
          color: (opacity = 1) => `rgba(0, 63, 92, ${opacity})`,
          labelColor: (opacity = 1) => `rgba(0, 63, 92, ${opacity})`,
          propsForDots: {
            r: '5',
            strokeWidth: '2',
            stroke: '#003f5c',
          },
          propsForLabels: {
            fontSize: 14,
          },
        }}
        on
      />
    ) : (
      <Text style={chartComponentStyles.noDataTextStyle}>
        No data available for this year
      </Text>
    );
  function computeData(yearCalculated) {
    setChartData(
      usages
        .filter((cons) => cons.year === yearCalculated)
        .map((x) => x.amount),
    );
    setChartLabels(
      usages
        .filter((cons) => cons.year === yearCalculated)
        .map((x) => months[x.month].substr(0, 3)),
    );
  }
  useEffect(() => {
    computeData(currentYear);
  }, [usages]);
  return (
    <View>
      <View style={chartComponentStyles.subViewStyle}>
        <TouchableOpacity
          onPress={() => {
            setYear(year - 1);
            computeData(year - 1);
          }}>
          <AntDesign name="arrowleft" size={30} />
        </TouchableOpacity>
        <Text style={chartComponentStyles.textStyle}>{year}</Text>
        <TouchableOpacity
          onPress={() => {
            setYear(year + 1);
            computeData(year + 1);
          }}>
          <AntDesign name="arrowright" size={30} />
        </TouchableOpacity>
      </View>
      {graphic}
    </View>
  );
};

export default ChartCompnent;
