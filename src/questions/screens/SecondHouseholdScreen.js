import React, {useState} from 'react';
import NumericInput from 'react-native-numeric-input';
import RadioForm from 'react-native-simple-radio-button';
import {View, Text} from 'react-native';
import {secondHouseholdScreenStyles} from './styles';
import {Button} from 'react-native-elements';

const SecondHouseholdScreen = () => {
  const [washCarNumber, setWashCarNumber] = useState(0);
  const [waterGarden, setWaterGarden] = useState(0);
  const [wateringLength, setWateringLength] = useState(0);
  const [collectWater, setCollectWater] = useState(false);

  const radio_props = [
    {label: 'Yes', value: true},
    {label: 'No', value: false},
  ];

  return (
    <View style={secondHouseholdScreenStyles.mainViewStyle}>
      <Text style={secondHouseholdScreenStyles.titleStyle}>
        Enter some details about your house
      </Text>
      <View style={secondHouseholdScreenStyles.questionsView}>
        <View style={secondHouseholdScreenStyles.locationTypeView}>
          <Text style={secondHouseholdScreenStyles.qustionTextStyle}>
            Wash your car at home each week?
          </Text>
          <NumericInput
            onChange={(item) => setWashCarNumber(item)}
            value={washCarNumber}
            initValue={washCarNumber}
            minValue={0}
            containerStyle={
              secondHouseholdScreenStyles.numericInputContainerStyle
            }
          />
        </View>
        <View style={secondHouseholdScreenStyles.locationTypeView}>
          <Text style={secondHouseholdScreenStyles.qustionTextStyle}>
            Water garden every week
          </Text>
          <NumericInput
            onChange={(item) => setWaterGarden(item)}
            value={waterGarden}
            initValue={waterGarden}
            minValue={0}
            containerStyle={
              secondHouseholdScreenStyles.numericInputContainerStyle
            }
          />
        </View>
        <View style={secondHouseholdScreenStyles.locationTypeView}>
          <Text style={secondHouseholdScreenStyles.qustionTextStyle}>
            Water garden every week
          </Text>
          <NumericInput
            onChange={(item) => setWateringLength(item)}
            value={wateringLength}
            initValue={wateringLength}
            minValue={0}
            containerStyle={
              secondHouseholdScreenStyles.numericInputContainerStyle
            }
          />
        </View>
        <View style={secondHouseholdScreenStyles.locationTypeView}>
          <Text style={secondHouseholdScreenStyles.qustionTextStyle}>
            Collect and use rainwater
          </Text>
          <RadioForm
            radio_props={radio_props}
            initial={collectWater}
            formHorizontal={true}
            onPress={(value) => {
              setCollectWater(value);
            }}
          />
        </View>
        <Button
          title="Next"
          style={secondHouseholdScreenStyles.buttonStyle}
          onPress={() => {
            console.log('press');
          }}
        />
      </View>
    </View>
  );
};

export default SecondHouseholdScreen;
