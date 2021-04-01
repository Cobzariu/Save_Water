import React, {useState} from 'react';
import NumericInput from 'react-native-numeric-input';
import RadioForm from 'react-native-simple-radio-button';
import {View, Text} from 'react-native';
import {personScreenStyles} from './styles';
import {Button, Input} from 'react-native-elements';

const PersonScreen = () => {
  const [name, setName] = useState('');
  const [bathsWeek, setBathsWeek] = useState(1);
  const [showersWeek, setShowersWeek] = useState(1);
  const [showerLength, setShowerLength] = useState(1);
  const [leaveTap, setLeaveTap] = useState(false);

  const radio_props = [
    {label: 'Yes', value: true},
    {label: 'No', value: false},
  ];

  return (
    <View style={personScreenStyles.mainViewStyle}>
      <Text style={personScreenStyles.titleStyle}>
        Enter some details about yourself
      </Text>

      <View style={personScreenStyles.questionsView}>
        <View style={personScreenStyles.locationTypeView}>
          <Input
            label="Name"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
          />
        </View>
        <View style={personScreenStyles.locationTypeView}>
          <Text style={personScreenStyles.qustionTextStyle}>
            Baths do you take per week
          </Text>
          <NumericInput
            onChange={(item) => setBathsWeek(item)}
            value={bathsWeek}
            initValue={bathsWeek}
            minValue={0}
            containerStyle={personScreenStyles.numericInputContainerStyle}
          />
        </View>
        <View style={personScreenStyles.locationTypeView}>
          <Text style={personScreenStyles.qustionTextStyle}>
            Showers per week
          </Text>
          <NumericInput
            onChange={(item) => setShowersWeek(item)}
            value={showersWeek}
            initValue={showersWeek}
            minValue={0}
            containerStyle={personScreenStyles.numericInputContainerStyle}
          />
        </View>
        <View style={personScreenStyles.locationTypeView}>
          <Text style={personScreenStyles.qustionTextStyle}>
            Shower length in minutes
          </Text>
          <NumericInput
            onChange={(item) => setShowerLength(item)}
            value={showerLength}
            initValue={showerLength}
            minValue={0}
            containerStyle={personScreenStyles.numericInputContainerStyle}
          />
        </View>
        <View style={personScreenStyles.specialQustionView}>
          <Text style={personScreenStyles.qustionTextStyle}>
            Water running when you clean your teeth
          </Text>
          <RadioForm
            radio_props={radio_props}
            initial={leaveTap}
            formHorizontal={true}
            onPress={(value) => {
              setLeaveTap(value);
            }}
          />
        </View>
        <Button
          title="Next"
          style={personScreenStyles.buttonStyle}
          onPress={() => {
            console.log('press');
          }}
        />
      </View>
    </View>
  );
};

export default PersonScreen;
