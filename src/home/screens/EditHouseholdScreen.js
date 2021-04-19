import React, {useState} from 'react';
import {connect} from 'react-redux';
import {updateHousehold, getHousehold} from '../../actions/household';
import {View, ScrollView, Text} from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import {GeneralButton} from '../../authentification/components';
import {RadioButton} from '../../questions/components';
import {editHouseholdScreenStyles} from './styles';

const EditHouseholdScreen = ({
  route,
  navigation,
  updateHousehold,
  getHousehold,
}) => {
  const currentHousehold = route.params.household;
  const [locationType, setLocationType] = useState(
    currentHousehold.locationTypeHouse,
  );
  const [washingMachineNumber, setWashingMachineNumber] = useState(
    currentHousehold.washingMachineNumberWeek,
  );
  const [fullyLoad, setFullyLoad] = useState(
    currentHousehold.washingMachineFullLoad,
  );
  const [handWashingNumber, setHandWashingNumber] = useState(
    currentHousehold.washHandNumberWeek,
  );
  const [dishWasherNumber, setDishWasherNumber] = useState(
    currentHousehold.dishwasherNumberWeek,
  );
  const [useBowl, setUseBowl] = useState(currentHousehold.bowlWashing);
  const [dualFlush, setDualFlush] = useState(currentHousehold.toiletDualFlush);
  const [washCarNumber, setWashCarNumber] = useState(
    currentHousehold.washCarNumberWeek,
  );
  const [waterGarden, setWaterGarden] = useState(
    currentHousehold.waterGardenNumberWeek,
  );
  const [wateringLength, setWateringLength] = useState(
    currentHousehold.waterGardenLength,
  );
  const [collectWater, setCollectWater] = useState(
    currentHousehold.collectRainwater,
  );

  const radio_props = [
    {label: 'Yes', value: true},
    {label: 'No', value: false},
  ];

  const radio_props_location = [
    {label: 'Flat', value: false},
    {label: 'House', value: true},
  ];

  const outdoorsQuestions =
    locationType === true ? (
      <>
        <View style={editHouseholdScreenStyles.indoorView}>
          <Text style={editHouseholdScreenStyles.indoorTextStyle}>Outdoor</Text>
        </View>
        <View style={editHouseholdScreenStyles.questionsView}>
          <View style={editHouseholdScreenStyles.locationTypeView}>
            <Text style={editHouseholdScreenStyles.qustionTextStyle}>
              Wash your car at home each week?
            </Text>
            <InputSpinner
              onChange={(item) => setWashCarNumber(item)}
              value={washCarNumber}
              initialValue={washCarNumber}
              minValue={0}
              width={130}
              textColor="white"
              color="#fb5b5a"
            />
          </View>
          <View style={editHouseholdScreenStyles.locationTypeView}>
            <Text style={editHouseholdScreenStyles.qustionTextStyle}>
              Water garden every week
            </Text>
            <InputSpinner
              onChange={(item) => setWaterGarden(item)}
              value={waterGarden}
              initialValue={waterGarden}
              minValue={0}
              width={130}
              textColor="white"
              color="#fb5b5a"
            />
          </View>
          <View style={editHouseholdScreenStyles.locationTypeView}>
            <Text style={editHouseholdScreenStyles.qustionTextStyle}>
              Watering lenght
            </Text>
            <InputSpinner
              onChange={(item) => setWateringLength(item)}
              value={wateringLength}
              initialValue={wateringLength}
              minValue={1}
              width={130}
              textColor="white"
              color="#fb5b5a"
            />
          </View>
          <View style={editHouseholdScreenStyles.locationTypeView}>
            <Text style={editHouseholdScreenStyles.qustionTextStyle}>
              Collect and use rainwater
            </Text>
            <RadioButton
              selectedValue={collectWater}
              props={radio_props}
              setSelectedValue={setCollectWater}
            />
          </View>
        </View>
      </>
    ) : null;

  return (
    <ScrollView>
      <View style={editHouseholdScreenStyles.mainViewStyle}>
        <Text style={editHouseholdScreenStyles.titleStyle}>
          Update your households details
        </Text>
        <View style={editHouseholdScreenStyles.indoorView}>
          <Text style={editHouseholdScreenStyles.indoorTextStyle}>Indoor</Text>
        </View>
        <View style={editHouseholdScreenStyles.questionsView}>
          <View style={editHouseholdScreenStyles.locationTypeView}>
            <Text style={editHouseholdScreenStyles.qustionTextStyle}>
              Select location type
            </Text>
            <RadioButton
              selectedValue={locationType}
              props={radio_props_location}
              setSelectedValue={setLocationType}
            />
          </View>
          <View style={editHouseholdScreenStyles.locationTypeView}>
            <Text style={editHouseholdScreenStyles.qustionTextStyle}>
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
          <View style={editHouseholdScreenStyles.locationTypeView}>
            <Text style={editHouseholdScreenStyles.qustionTextStyle}>
              Fully load the washing machine
            </Text>
            <RadioButton
              selectedValue={fullyLoad}
              props={radio_props}
              setSelectedValue={setFullyLoad}
            />
          </View>
          <View style={editHouseholdScreenStyles.locationTypeView}>
            <Text style={editHouseholdScreenStyles.qustionTextStyle}>
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
          <View style={editHouseholdScreenStyles.locationTypeView}>
            <Text style={editHouseholdScreenStyles.qustionTextStyle}>
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
          <View style={editHouseholdScreenStyles.locationTypeView}>
            <Text style={editHouseholdScreenStyles.qustionTextStyle}>
              Do you use a bowl for washing up?
            </Text>
            <RadioButton
              selectedValue={useBowl}
              props={radio_props}
              setSelectedValue={setUseBowl}
            />
          </View>
          <View style={editHouseholdScreenStyles.locationTypeView}>
            <Text style={editHouseholdScreenStyles.qustionTextStyle}>
              Toilet have a dual flush mechanism?
            </Text>
            <RadioButton
              selectedValue={dualFlush}
              props={radio_props}
              setSelectedValue={setDualFlush}
            />
          </View>
        </View>
        {outdoorsQuestions}
        <GeneralButton
          title="Update"
          onPress={() => {
            updateHousehold(
              locationType,
              washingMachineNumber,
              fullyLoad,
              handWashingNumber,
              useBowl,
              dishWasherNumber,
              dualFlush,
              washCarNumber,
              waterGarden,
              wateringLength,
              collectWater,
            ).then(
              (succ) => {
                getHousehold();
                navigation.goBack();
              },
              (fail) => {},
            );
          }}
        />
      </View>
    </ScrollView>
  );
};

export default connect(null, {updateHousehold, getHousehold})(
  EditHouseholdScreen,
);
