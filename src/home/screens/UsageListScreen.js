import React, {useEffect, useMemo, useState} from 'react';
import {View, FlatList, Text, TouchableOpacity, Dimensions} from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ModalDropdown from 'react-native-modal-dropdown';
import {Overlay} from 'react-native-elements';
import {
  getUsages,
  saveUsage,
  deleteUsage,
  clearHouseholdMessage,
} from '../../actions/household';
import {connect} from 'react-redux';
import {ChartCompnent, UsageItem} from '../components';
import {usageListStyles} from './styles';
import {months} from '../../utils/variables';
import {GeneralButton, Spinner} from '../../authentification/components';
import {colors} from '../../core/themes';

const UsageListScreen = ({
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
  const [amount, setAmount] = useState(1);
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const [chartYear, setChartYear] = useState(currentYear);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const computedList = useMemo(() => {
    const result = usages.filter((cons) => cons.year === chartYear);
    return result;
  }, [chartYear]);
  return (
    <View style={usageListStyles.mainView}>
      <Spinner loading={isLoading} />
      <View>
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={usageListStyles.overlayView}>
          <View style={usageListStyles.overlayView}>
            <View style={usageListStyles.amountView}>
              <Text style={usageListStyles.overlayTextStyle}>Amount (m</Text>
              <Text style={usageListStyles.superScriptText}>3</Text>
              <Text style={usageListStyles.overlayTextStyle}>)</Text>
              <InputSpinner
                max={amount}
                min={1}
                max={100}
                step={1}
                value={amount}
                onChange={(num) => {
                  setAmount(num);
                }}
                width={150}
                style={usageListStyles.inputSpinnerStyle}
                textColor="white"
                color={colors.darkRed}
                fontFamily="Roboto-Medium"
              />
            </View>
            <View style={usageListStyles.amountView}>
              <Text style={usageListStyles.overlayTextStyle}>Year</Text>
              <InputSpinner
                max={currentYear}
                min={2000}
                step={1}
                value={year}
                onChange={(num) => {
                  setYear(num);
                }}
                width={150}
                style={usageListStyles.inputSpinnerStyle}
                textColor="white"
                color={colors.darkRed}
                fontFamily="Roboto-Medium"
              />
            </View>
            <View style={usageListStyles.amountView}>
              <Text style={usageListStyles.overlayTextStyle}>Month</Text>
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
                renderSeparator={() => (
                  <View style={usageListStyles.renderView} />
                )}
              />
            </View>
            {error_message ? (
              <Text style={usageListStyles.errorMessage}>{error_message}</Text>
            ) : null}
            <View style={usageListStyles.buttonViewStyle}>
              <GeneralButton
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
          </View>
        </Overlay>
        <FlatList
          data={computedList}
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
            <View style={usageListStyles.mainHeaderView}>
              <ChartCompnent
                usages={usages}
                year={chartYear}
                setYear={setChartYear}
              />
              <View style={usageListStyles.headerSecondView}>
                <Text style={usageListStyles.titleText}>
                  Your household consumption
                </Text>
                <TouchableOpacity>
                  <MaterialIcons
                    name="add"
                    size={30}
                    color={colors.darkRed}
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
})(UsageListScreen);
