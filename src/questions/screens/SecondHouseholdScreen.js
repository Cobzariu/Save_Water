import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import {saveHousehold} from '../../actions/household';
import {secondHouseholdScreenStyles} from './styles';
import {GeneralButton, Spinner} from '../../authentification/components';
import InputSpinner from 'react-native-input-spinner';
import {RadioButton} from '../components';
import { colors } from '../../core/themes';

const SecondHouseholdScreen = ({navigation, saveHousehold}) => {
  const [washCarNumber, setWashCarNumber] = useState(0);
  const [waterGarden, setWaterGarden] = useState(0);
  const [wateringLength, setWateringLength] = useState(1);
  const [collectWater, setCollectWater] = useState(false);

  const [loading, setLoading] = useState(false);

  const radio_props = [
    {label: 'Yes', value: true},
    {label: 'No', value: false},
  ];

  return (
    <View style={secondHouseholdScreenStyles.mainViewStyle}>
      <Spinner loading={loading} />
      <Text style={secondHouseholdScreenStyles.titleStyle}>
        Enter some details about your house
      </Text>
      <View style={secondHouseholdScreenStyles.questionsView}>
        <View style={secondHouseholdScreenStyles.locationTypeView}>
          <Text style={secondHouseholdScreenStyles.qustionTextStyle}>
            Washing the car each week
          </Text>
          <InputSpinner
            onChange={(item) => setWashCarNumber(item)}
            value={washCarNumber}
            initialValue={washCarNumber}
            minValue={0}
            width={130}
            textColor="white"
            color={colors.darkRed}
          />
        </View>
        <View style={secondHouseholdScreenStyles.locationTypeView}>
          <Text style={secondHouseholdScreenStyles.qustionTextStyle}>
            Watering the garden each week
          </Text>
          <InputSpinner
            onChange={(item) => setWaterGarden(item)}
            value={waterGarden}
            initialValue={waterGarden}
            minValue={0}
            width={130}
            textColor="white"
            color={colors.darkRed}
          />
        </View>
        <View style={secondHouseholdScreenStyles.locationTypeView}>
          <Text style={secondHouseholdScreenStyles.qustionTextStyle}>
            Length of the watering in minutes
          </Text>
          <InputSpinner
            onChange={(item) => setWateringLength(item)}
            value={wateringLength}
            initialValue={wateringLength}
            minValue={1}
            width={130}
            textColor="white"
            color={colors.darkRed}
          />
        </View>
        <View style={secondHouseholdScreenStyles.locationTypeView}>
          <Text style={secondHouseholdScreenStyles.qustionTextStyle}>
            Collect rainwater
          </Text>
          <RadioButton
            selectedValue={collectWater}
            props={radio_props}
            setSelectedValue={setCollectWater}
          />
        </View>
      </View>
      <GeneralButton
        title="Next"
        onPress={() => {
          setLoading(true);
          saveHousehold(
            washCarNumber,
            waterGarden,
            wateringLength,
            collectWater,
          ).then(
            (succ) => {
              setLoading(false);
              navigation.navigate('Person');
            },
            (fail) => {
              setLoading(false);
            },
          );
        }}
      />
    </View>
  );
};

export default connect(null, {saveHousehold})(SecondHouseholdScreen);
