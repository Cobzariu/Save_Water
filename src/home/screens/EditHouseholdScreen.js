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
              Washing the car each week
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
              Watering the garden each week
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
              Length of the watering in minutes
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
              Collect rainwater
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
              Washing the dishes by hand each week
            </Text>
            <InputSpinner
              onChange={(item) => setHandWashingNumber(item)}
              value={handWashingNumber}
              initialValue={handWashingNumber}
              width={130}
              textColor="white"
              color="#fb5b5a"
            />
          </View>
          <View style={editHouseholdScreenStyles.locationTypeView}>
            <Text style={editHouseholdScreenStyles.qustionTextStyle}>
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
          <View style={editHouseholdScreenStyles.locationTypeView}>
            <Text style={editHouseholdScreenStyles.qustionTextStyle}>
              Using a bowl for cleaning dishes
            </Text>
            <RadioButton
              selectedValue={useBowl}
              props={radio_props}
              setSelectedValue={setUseBowl}
            />
          </View>
          <View style={editHouseholdScreenStyles.locationTypeView}>
            <Text style={editHouseholdScreenStyles.qustionTextStyle}>
              Owning dual flush toilets
            </Text>
            <RadioButton
              selectedValue={dualFlush}
              props={radio_props}
              setSelectedValue={setDualFlush}
            />
          </View>
        </View>
        {outdoorsQuestions}
        <View style={editHouseholdScreenStyles.buttonView}>
          <GeneralButton
            title="Update"
            width="50%"
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
          <GeneralButton
            title="Cancel"
            width="50%"
            marginLeft={5}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default connect(null, {updateHousehold, getHousehold})(
  EditHouseholdScreen,
);
