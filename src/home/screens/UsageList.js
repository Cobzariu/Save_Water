import React, {useEffect, useState} from 'react';
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
import {
  GeneralButton,
  InputField,
  Spinner,
} from '../../authentification/components';

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
  const [amount, setAmount] = useState(1);
  const [year, setYear] = useState(currentYear);
  const [month, setMonth] = useState(currentMonth);
  const toggleOverlay = () => {
    setVisible(!visible);
  };
  return (
    <View style={usageListStyles.mainView}>
      <Spinner loading={isLoading} />
      <View style={usageListStyles.subView}>
        <Overlay
          isVisible={visible}
          onBackdropPress={toggleOverlay}
          overlayStyle={usageListStyles.overlayView}>
          <View style={usageListStyles.overlayView}>
            <View style={usageListStyles.amountView}>
              <Text style={usageListStyles.overlayTextStyle}>Amount</Text>
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
                color="#fb5b5a"
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
                color="#fb5b5a"
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
                renderSeparator={()=><View style={{borderColor: '#fb5b5a',borderWidth:1}}/>}
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
              <ChartCompnent usages={usages} />
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
