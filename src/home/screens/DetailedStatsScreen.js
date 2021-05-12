import React, {useEffect, useState} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {LineChart, PieChart} from 'react-native-chart-kit';
import {connect} from 'react-redux';
import {getStatistics} from '../../actions/household';
import {colors} from '../../core/themes';
import {months} from '../../utils/variables';
import {detailedStatsScreenStyles} from '../components/styles';
import {Spinner} from '../../authentification/components';

const DetailedStatsScreen = ({
  getStatistics,
  lpdList,
  seasonsStats,
  isLoading,
}) => {
  const currentYear = new Date().getFullYear();
  const [year, setYear] = useState(currentYear);
  const [LPDChartData, setLPDChartData] = useState([]);
  const [LPDChartLabels, setLPDChartLabels] = useState([]);
  const [seasonsChartData, setSeasonsChartData] = useState([]);

  const HEIGHT = Dimensions.get('screen').height / 3.7;

  const chartConfig = {
    backgroundGradientFrom: '#1E2923',
    backgroundGradientFromOpacity: 0,
    backgroundGradientTo: '#08130D',
    backgroundGradientToOpacity: 0.5,
    color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
    strokeWidth: 1, // optional, default 3
    barPercentage: 1,
    useShadowColorFromDataset: false, // optional
  };

  const LPDChart =
    LPDChartData.length > 0 ? (
      <View>
        <Text style={detailedStatsScreenStyles.titleTextStyle}>
          Water usage in liters/person/day
        </Text>
        <LineChart
          data={{
            labels: LPDChartLabels,
            datasets: [
              {
                data: LPDChartData,
              },
            ],
          }}
          width={Dimensions.get('screen').width - 10}
          height={HEIGHT}
          yAxisSuffix="lpd"
          chartConfig={{
            backgroundColor: colors.darkRed,
            backgroundGradientFrom: '#ff8685',
            backgroundGradientTo: '#ff6261',
            decimalPlaces: 0,
            color: (opacity = 1) => `rgba(0, 63, 92, ${opacity})`,
            labelColor: (opacity = 1) => `rgba(0, 63, 92, ${opacity})`,
            propsForDots: {
              r: '5',
              strokeWidth: '2',
              stroke: colors.darkBlue,
            },
            propsForLabels: {
              fontSize: 14,
            },
          }}
          on
          bezier
          style={{borderRadius: 10}}
        />
      </View>
    ) : null;

  const seasonsChart =
    LPDChartData.length > 0 ? (
      <View style={detailedStatsScreenStyles.lowerCharViewStyle}>
        <Text style={detailedStatsScreenStyles.titleTextStyle}>
          Seasonal water usage
        </Text>
        <PieChart
          data={seasonsChartData}
          width={Dimensions.get('screen').width - 10}
          height={HEIGHT}
          chartConfig={chartConfig}
          accessor={'amount'}
          backgroundColor="#ebc0c0"
          style={{borderRadius: 10}}
        />
      </View>
    ) : null;
  const noData =
    seasonsChart === null ? (
      <Text style={detailedStatsScreenStyles.noDataTextStyle}>
        No data available for this year
      </Text>
    ) : null;

  function computeData() {
    setLPDChartData(lpdList.map((x) => x.lpd));
    setLPDChartLabels(lpdList.map((x) => months[x.month].substr(0, 3)));
    var seasonList = [];
    seasonList.push({
      name: 'Summer',
      amount: seasonsStats.summerAmount,
      color: '#f2ce0f',
      legendFontColor: colors.darkBlue,
      legendFontSize: 15,
    });
    seasonList.push({
      name: 'Winter',
      amount: seasonsStats.winterAmount,
      color: '#0f97db',
      legendFontColor: colors.darkBlue,
      legendFontSize: 15,
    });
    seasonList.push({
      name: 'Autumn',
      amount: seasonsStats.fallAmount,
      color: '#b35b00',
      legendFontColor: colors.darkBlue,
      legendFontSize: 15,
    });
    seasonList.push({
      name: 'Spring',
      amount: seasonsStats.springAmount,
      color: '#00ad14',
      legendFontColor: colors.darkBlue,
      legendFontSize: 15,
    });
    setSeasonsChartData(seasonList);
  }

  useEffect(() => {
    getStatistics(currentYear);
  }, []);
  useEffect(() => {
    computeData();
  }, [lpdList]);
  return (
    <ScrollView style={detailedStatsScreenStyles.mainViewStyle}>
      <Spinner loading={isLoading} />
      <View style={detailedStatsScreenStyles.subViewStyle}>
        <TouchableOpacity
          onPress={() => {
            setYear(year - 1);
            getStatistics(year - 1);
          }}>
          <AntDesign name="arrowleft" size={30} />
        </TouchableOpacity>
        <Text style={detailedStatsScreenStyles.textStyle}>{year}</Text>
        <TouchableOpacity
          onPress={() => {
            setYear(year + 1);
            getStatistics(year + 1);
          }}>
          <AntDesign name="arrowright" size={30} />
        </TouchableOpacity>
      </View>
      <View style={detailedStatsScreenStyles.graphsViewStyle}>
        {LPDChart}

        {seasonsChart}
      </View>
      {noData}
    </ScrollView>
  );
};

const mapStateToProps = (state) => {
  return {
    lpdList: state.household.lpdList,
    seasonsStats: state.household.seasonsStats,
    isLoading: state.household.isLoading,
  };
};

export default connect(mapStateToProps, {getStatistics})(DetailedStatsScreen);
