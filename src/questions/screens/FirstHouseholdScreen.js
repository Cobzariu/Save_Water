import React, {useState} from 'react';
import {connect} from 'react-redux';
import RadioForm from 'react-native-simple-radio-button';
import InputSpinner from 'react-native-input-spinner';
import {View, Text} from 'react-native';
import {firstHouseholdSave, saveHousehold} from '../../actions/household';
import {firstHouseholdScreenStyles} from './styles';
import {GeneralButton} from '../../authentification/components';
import {ScrollView} from 'react-native';

const FirstHouseholdScreen = ({
  navigation,
  firstHouseholdSave,
  saveHousehold,
}) => {
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
    <ScrollView>
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
              buttonColor="white"
              labelColor="white"
            />
          </View>
          <View style={firstHouseholdScreenStyles.locationTypeView}>
            <Text style={firstHouseholdScreenStyles.qustionTextStyle}>
              People living in your home
            </Text>
            <InputSpinner
              onChange={(item) => setNumberPeople(item)}
              value={numberPeople}
              initialValue={numberPeople}
              min={1}
              width={130}
              textColor="white"
              color="#fb5b5a"
            />
          </View>
          <View style={firstHouseholdScreenStyles.locationTypeView}>
            <Text style={firstHouseholdScreenStyles.qustionTextStyle}>
              Washing machine per week?
            </Text>
            <InputSpinner
              onChange={(item) => setWashingMachineNumber(item)}
              value={washingMachineNumber}
              initialValue={washingMachineNumber}
              min={1}
              width={130}
              textColor="white"
              color="#fb5b5a"
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
              Household wash by hand per week
            </Text>
            <InputSpinner
              onChange={(item) => setHandWashingNumber(item)}
              value={handWashingNumber}
              initialValue={handWashingNumber}
              min={1}
              width={130}
              textColor="white"
              color="#fb5b5a"
            />
          </View>
          <View style={firstHouseholdScreenStyles.locationTypeView}>
            <Text style={firstHouseholdScreenStyles.qustionTextStyle}>
              Use dishwasher per week
            </Text>
            <InputSpinner
              onChange={(item) => setDishWasherNumber(item)}
              value={dishWasherNumber}
              initialValue={dishWasherNumber}
              width={130}
              min={0}
              max={100}
              textColor="white"
              color="#fb5b5a"
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
        </View>
        <GeneralButton
          title="Next"
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
            if (locationType === true) {
              navigation.navigate('SecondHousehold');
            } else {
              saveHousehold(0, 0, 0, false).then(
                (succ) => {
                  console.log('Success');
                  navigation.navigate('Person');
                },
                (fail) => {
                  console.log('FAIL');
                },
              );
            }
          }}
        />
      </View>
    </ScrollView>
  );
};

export default connect(null, {firstHouseholdSave, saveHousehold})(
  FirstHouseholdScreen,
);
