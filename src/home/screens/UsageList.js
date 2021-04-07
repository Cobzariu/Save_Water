import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import ModalDropdown from 'react-native-modal-dropdown';
import {Button, Overlay, Input} from 'react-native-elements';
import {
  getUsages,
  saveUsage,
  clearHouseholdMessage,
} from '../../actions/household';
import {connect} from 'react-redux';
import {UsageItem} from '../components';
import {usageListStyles} from './styles';
import {months} from '../../utils/variables';

const UsageList = ({
  usages,
  error_message,
  getUsages,
  saveUsage,
  clearHouseholdMessage,
}) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  return (
    <View style={usageListStyles.mainView}>
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
        renderItem={({item}) => <UsageItem data={item} />}
        ListHeaderComponent={
          <View style={usageListStyles.headerMainView}>
            <Text style={usageListStyles.titleText}>
              Your household consumption
            </Text>
            <Button
              title="Add new usage"
              onPress={() => {
                clearHouseholdMessage();
                setVisible(!visible);
              }}
            />
          </View>
        }
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    usages: state.household.usages,
    error_message: state.household.error_message,
  };
};

export default connect(mapStateToProps, {
  getUsages,
  saveUsage,
  clearHouseholdMessage,
})(UsageList);
