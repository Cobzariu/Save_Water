import React, {useState} from 'react';
import {connect} from 'react-redux';
import NumericInput from 'react-native-numeric-input';
import RadioForm from 'react-native-simple-radio-button';
import {View, Text} from 'react-native';
import {firstHouseholdSave} from '../../actions/household';
import {firstHouseholdScreenStyles} from './styles';
import {Button} from 'react-native-elements';

const FirstHouseholdScreen = ({navigation, firstHouseholdSave}) => {
  const [locationType, setLocationType] = useState(true);
  const [numberPeople, setNumberPeople] = useState(1);
  const [washingMachineNumber, setWashingMachineNumber] = useState(1);
  const [fullyLoad, setFullyLoad] = useState(true);
  const [handWashingNumber, setHandWashingNumber] = useState(1);
  const [dishWasherNumber, setDishWasherNumber] = useState(0);
  const [useBowl, setUseBowl] = useState(false);
  const [dualFlush, setDualFlush] = useState(false);

  const radio_props = [
    {label: 'Yes', value: true},
    {label: 'No', value: false},
  ];

  const radio_props_location = [
    {label: 'Flat', value: false},
    {label: 'House', value: true},
  ];

  return (
    <View style={firstHouseholdScreenStyles.mainViewStyle}>
      <Text style={firstHouseholdScreenStyles.titleStyle}>
        Enter your households details
      </Text>
      <View style={firstHouseholdScreenStyles.questionsView}>
        <View style={firstHouseholdScreenStyles.locationTypeView}>
          <Text style={firstHouseholdScreenStyles.qustionTextStyle}>
            Choose your location type
          </Text>
          <RadioForm
            radio_props={radio_props_location}
            initial={locationType}
            formHorizontal={true}
            onPress={(value) => {
              setLocationType(value);
            }}
          />
        </View>
        <View style={firstHouseholdScreenStyles.locationTypeView}>
          <Text style={firstHouseholdScreenStyles.qustionTextStyle}>
            How many people live in your home?
          </Text>
          <NumericInput
            onChange={(item) => setNumberPeople(item)}
            value={numberPeople}
            initValue={numberPeople}
            minValue={1}
            containerStyle={
              firstHouseholdScreenStyles.numericInputContainerStyle
            }
          />
        </View>
        <View style={firstHouseholdScreenStyles.locationTypeView}>
          <Text style={firstHouseholdScreenStyles.qustionTextStyle}>
            Washing machine per week?
          </Text>
          <NumericInput
            onChange={(item) => setWashingMachineNumber(item)}
            value={washingMachineNumber}
            initValue={washingMachineNumber}
            minValue={1}
            containerStyle={
              firstHouseholdScreenStyles.numericInputContainerStyle
            }
          />
        </View>
        <View style={firstHouseholdScreenStyles.locationTypeView}>
          <Text style={firstHouseholdScreenStyles.qustionTextStyle}>
            Fully load the washing machine
          </Text>
          <RadioForm
            radio_props={radio_props}
            initial={fullyLoad}
            formHorizontal={true}
            onPress={(value) => {
              setFullyLoad(value);
            }}
          />
        </View>
        <View style={firstHouseholdScreenStyles.locationTypeView}>
          <Text style={firstHouseholdScreenStyles.qustionTextStyle}>
            Household wash up by hand each week
          </Text>
          <NumericInput
            onChange={(item) => setHandWashingNumber(item)}
            value={handWashingNumber}
            initValue={handWashingNumber}
            minValue={1}
            containerStyle={
              firstHouseholdScreenStyles.numericInputContainerStyle
            }
          />
        </View>
        <View style={firstHouseholdScreenStyles.locationTypeView}>
          <Text style={firstHouseholdScreenStyles.qustionTextStyle}>
            Use dishwasher each week
          </Text>
          <NumericInput
            onChange={(item) => setDishWasherNumber(item)}
            value={dishWasherNumber}
            initValue={dishWasherNumber}
            minValue={0}
            containerStyle={
              firstHouseholdScreenStyles.numericInputContainerStyle
            }
          />
        </View>
        <View style={firstHouseholdScreenStyles.locationTypeView}>
          <Text style={firstHouseholdScreenStyles.qustionTextStyle}>
            Do you use a bowl for washing up?
          </Text>
          <RadioForm
            radio_props={radio_props}
            initial={useBowl}
            formHorizontal={true}
            onPress={(value) => {
              setUseBowl(value);
            }}
          />
        </View>
        <View style={firstHouseholdScreenStyles.locationTypeView}>
          <Text style={firstHouseholdScreenStyles.qustionTextStyle}>
            Toilet have a dual flush mechanism?
          </Text>
          <RadioForm
            radio_props={radio_props}
            initial={dualFlush}
            formHorizontal={true}
            onPress={(value) => {
              setDualFlush(value);
            }}
          />
        </View>
        <Button
          title="Next"
          style={firstHouseholdScreenStyles.buttonStyle}
          onPress={() => {
            firstHouseholdSave(
              locationType,
              numberPeople,
              washingMachineNumber,
              fullyLoad,
              handWashingNumber,
              useBowl,
              dishWasherNumber,
              dualFlush,
            );
            navigation.navigate('SecondHousehold');
          }}
        />
      </View>
    </View>
  );
};

export default connect(null, {firstHouseholdSave})(FirstHouseholdScreen);
