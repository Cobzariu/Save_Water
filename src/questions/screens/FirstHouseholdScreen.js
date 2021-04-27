import React, {useState} from 'react';
import {connect} from 'react-redux';
import InputSpinner from 'react-native-input-spinner';
import {View, Text} from 'react-native';
import {firstHouseholdSave, saveHousehold} from '../../actions/household';
import {firstHouseholdScreenStyles} from './styles';
import {GeneralButton} from '../../authentification/components';
import {ScrollView} from 'react-native';
import {RadioButton} from '../components';

const FirstHouseholdScreen = ({
  navigation,
  firstHouseholdSave,
  saveHousehold,
}) => {
  const [locationType, setLocationType] = useState(false);
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
              Select location type
            </Text>
            <RadioButton
              selectedValue={locationType}
              props={radio_props_location}
              setSelectedValue={setLocationType}
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
              Using the washing machine each week
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
            <RadioButton
              selectedValue={fullyLoad}
              props={radio_props}
              setSelectedValue={setFullyLoad}
            />
          </View>
          <View style={firstHouseholdScreenStyles.locationTypeView}>
            <Text style={firstHouseholdScreenStyles.qustionTextStyle}>
              Washing the dishes by hand each week
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
              Using the dishwasher each week
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
              Using a bowl for cleaning dishes
            </Text>
            <RadioButton
              selectedValue={useBowl}
              props={radio_props}
              setSelectedValue={setUseBowl}
            />
          </View>
          <View style={firstHouseholdScreenStyles.locationTypeView}>
            <Text style={firstHouseholdScreenStyles.qustionTextStyle}>
              Owning dual flush toilets
            </Text>
            <RadioButton
              selectedValue={dualFlush}
              props={radio_props}
              setSelectedValue={setDualFlush}
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
                  navigation.navigate('Person');
                },
                (fail) => {},
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
