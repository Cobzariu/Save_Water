import React, {useEffect, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, Dimensions} from 'react-native';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart,
} from 'react-native-chart-kit';
import InputSpinner from 'react-native-input-spinner';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalDropdown from 'react-native-modal-dropdown';
import {Button, Overlay, Input} from 'react-native-elements';
import {
  getUsages,
  saveUsage,
  deleteUsage,
  clearHouseholdMessage,
} from '../../actions/household';
import {connect} from 'react-redux';
import {UsageItem} from '../components';
import {usageListStyles} from './styles';
import {months} from '../../utils/variables';
import {Spinner} from '../../authentification/components';

const UsageList = ({
  usages,
  error_message,
  getUsages,
  saveUsage,
  deleteUsage,
  clearHouseholdMessage,
  isLoading,
}) => {
  useEffect(() => {
    getUsages();
  }, []);
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const charData = usages
    .filter((cons) => cons.year === currentYear)
    .map((x) => x.amount);
  const charLabels = usages
    .filter((cons) => cons.year === currentYear)
    .map((x) => months[x.month]);
  return (
    <View style={usageListStyles.mainView}>
      <Spinner loading={isLoading} />
      <View style={usageListStyles.subView}>
        <Overlay isVisible={visible} onBackdropPress={toggleOverlay}>
          <View style={usageListStyles.amountView}>
            <Text>Enter Amount</Text>
            <Input
              containerStyle={usageListStyles.inputStyle}
              onChangeText={setAmount}
              value={amount}
              keyboardType="numeric"
              placeholder="3.32"
            />
          </View>
          <View style={usageListStyles.amountView}>
            <Text>Year</Text>
            <InputSpinner
              max={currentYear}
              min={2000}
              step={1}
              colorMax={'#f04048'}
              colorMin={'#40c5f4'}
              value={year}
              onChange={(num) => {
                setYear(num);
              }}
              width={150}
              style={usageListStyles.inputSpinnerStyle}
            />
          </View>
          <View style={usageListStyles.amountView}>
            <Text>Month</Text>
            <ModalDropdown
              defaultValue={months[currentMonth]}
              options={months}
              textStyle={usageListStyles.dropDownTextStyle}
              style={usageListStyles.dropDownMainStyle}
              dropdownStyle={usageListStyles.dropDownStyle}
              dropdownTextStyle={usageListStyles.dropDownDropTextStyle}
              onSelect={(index) => {
                setMonth(index);
              }}
            />
          </View>
          {error_message ? (
            <Text style={usageListStyles.errorMessage}>{error_message}</Text>
          ) : null}
          <View style={usageListStyles.buttonViewStyle}>
            <Button
              title="Save"
              onPress={() => {
                saveUsage(amount, month, year).then(
                  (succ) => {
                    getUsages();
                    clearHouseholdMessage();
                    setVisible(!visible);
                    setAmount('');
                    setMonth(currentMonth);
                    setYear(currentYear);
                  },
                  (fail) => {},
                );
              }}
            />
          </View>
        </Overlay>
        <FlatList
          data={usages}
          showsVerticalScrollIndicator={false}
          keyExtractor={(item) => item._id}
          renderItem={({item}) => (
            <UsageItem
              data={item}
              onPress={() => {
                deleteUsage(item._id).then(
                  (succ) => {
                    getUsages();
                  },
                  (fail) => {},
                );
              }}
            />
          )}
          ListHeaderComponent={
            <View>
              {usages.length > 0 ? (
                <LineChart
                  data={{
                    labels: charLabels,
                    datasets: [
                      {
                        data: charData,
                      },
                    ],
                  }}
                  width={Dimensions.get('window').width} // from react-native
                  height={220}
                  chartConfig={{
                    backgroundColor: '#fb5b5a',
                    backgroundGradientFrom: '#ff8685',
                    backgroundGradientTo: '#ff6261',
                    decimalPlaces: 2, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
                    style: {
                      borderRadius: 16,
                    },
                    propsForDots: {
                      r: '6',
                      strokeWidth: '2',
                      stroke: '#fb5b5a',
                    },
                  }}
                />
              ) : null}

              <View style={usageListStyles.headerMainView}>
                <Text style={usageListStyles.titleText}>
                  Your household consumption
                </Text>
                <TouchableOpacity>
                  <MaterialIcons
                    name="add"
                    size={30}
                    onPress={() => {
                      clearHouseholdMessage();
                      setVisible(!visible);
                    }}
                  />
                </TouchableOpacity>
              </View>
            </View>
          }
        />
      </View>
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    usages: state.household.usages,
    error_message: state.household.error_message,
    isLoading: state.household.isLoading,
  };
};

export default connect(mapStateToProps, {
  getUsages,
  saveUsage,
  deleteUsage,
  clearHouseholdMessage,
})(UsageList);
