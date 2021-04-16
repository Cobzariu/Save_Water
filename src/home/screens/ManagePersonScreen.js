import React, {useState} from 'react';
import {connect} from 'react-redux';
import {View, Text} from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import {managePersonStyles} from './styles';
import { GeneralButton, InputField } from '../../authentification/components';
import { RadioButton } from '../../questions/components';

const ManagePersonScreen = () => {
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
    <View style={managePersonStyles.mainViewStyle}>
      <Text style={managePersonStyles.titleStyle}>
        Enter some details person
      </Text>
      <View style={managePersonStyles.questionsView}>
        <View style={managePersonStyles.locationTypeView}>
          <InputField
            placeholder="Name"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
          />
        </View>
        <View style={managePersonStyles.locationTypeView}>
          <Text style={managePersonStyles.qustionTextStyle}>
            Baths do you take per week
          </Text>
          <InputSpinner
            onChange={(item) => setBathsWeek(item)}
            value={bathsWeek}
            initialValue={bathsWeek}
            width={130}
            min={0}
            max={100}
            textColor="white"
            color="#fb5b5a"
          />
        </View>
        <View style={managePersonStyles.locationTypeView}>
          <Text style={managePersonStyles.qustionTextStyle}>
            Showers per week
          </Text>
          <InputSpinner
            onChange={(item) => setShowersWeek(item)}
            value={showersWeek}
            initialValue={showersWeek}
            width={130}
            min={0}
            max={100}
            textColor="white"
            color="#fb5b5a"
          />
        </View>
        <View style={managePersonStyles.locationTypeView}>
          <Text style={managePersonStyles.qustionTextStyle}>
            Shower length in minutes
          </Text>
          <InputSpinner
            onChange={(item) => setShowerLength(item)}
            value={showerLength}
            initialValue={showerLength}
            width={130}
            min={0}
            max={100}
            textColor="white"
            color="#fb5b5a"
          />
        </View>
        <View style={managePersonStyles.locationTypeView}>
          <Text style={managePersonStyles.qustionTextStyle}>
            Water running when you clean your teeth
          </Text>
          <RadioButton
            selectedValue={leaveTap}
            setSelectedValue={setLeaveTap}
            props={radio_props}
          />
        </View>
      </View>
      <View style={managePersonStyles.buttonView}>
        <GeneralButton title="Next" />
      </View>
    </View>
  );
};
export default connect(null, null)(ManagePersonScreen);
