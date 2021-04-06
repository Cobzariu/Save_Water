import React, {useState} from 'react';
import {View, FlatList, Text} from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import DropDownPicker from 'react-native-dropdown-picker';
import ModalDropdown from 'react-native-modal-dropdown';
import {Button, Overlay, Input} from 'react-native-elements';
import {connect} from 'react-redux';
import {UsageItem} from '../components';
import {usageListStyles} from './styles';
import {months} from '../../utils/variables';

const UsageList = ({usages}) => {
  const currentYear = new Date().getFullYear();
  const currentMonth = new Date().getMonth();
  const [visible, setVisible] = useState(false);
  const [amount, setAmount] = useState('');
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(0);
  const toggleOverlay = () => {
    setVisible(!visible);
  };

  const dropDownItems = [
    {label: 'January', value: 0},
    {label: 'February', value: 1},
    {label: 'March', value: 2},
    {label: 'April', value: 3},
    {label: 'May', value: 4},
    {label: 'June', value: 5},
    {label: 'July', value: 6},
    {label: 'August', value: 7},
    {label: 'September', value: 8},
    {label: 'October', value: 9},
    {label: 'November', value: 10},
    {label: 'December', value: 11},
  ];
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
              console.log(index);
            }}
          />
        </View>
        <View style={usageListStyles.buttonViewStyle}>
          <Button title="Save" onPress={toggleOverlay} />
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
            <Button title="Add new usage" onPress={toggleOverlay} />
          </View>
        }
      />
    </View>
  );
};

const mapStateToProps = (state) => {
  return {
    usages: state.household.usages,
  };
};

export default connect(mapStateToProps, null)(UsageList);
