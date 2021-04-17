import React, {useState} from 'react';
import {connect} from 'react-redux';
import {addNewPerson, getPeople} from '../../actions/person';
import {getHousehold} from '../../actions/household';
import {View, Text} from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import {managePersonStyles} from './styles';
import {GeneralButton, InputField} from '../../authentification/components';
import {RadioButton} from '../../questions/components';

const ManagePersonScreen = ({
  route,
  navigation,
  addNewPerson,
  getHousehold,
  getPeople,
}) => {
  const actionType = route.params.type;
  const titleText =
    actionType === 'add'
      ? 'Enter some details about a new person'
      : 'Update some details about a person';
  const buttonText = actionType === 'add' ? 'Save' : 'Update';
  const onPressHandler = () => {
    if (actionType === 'add') save();
    else update();
  };
  const [name, setName] = useState('');
  const [bathsWeek, setBathsWeek] = useState(1);
  const [showersWeek, setShowersWeek] = useState(1);
  const [showerLength, setShowerLength] = useState(1);
  const [leaveTap, setLeaveTap] = useState(false);
  const radio_props = [
    {label: 'Yes', value: true},
    {label: 'No', value: false},
  ];

  function save() {
    addNewPerson(name, showersWeek, bathsWeek, showerLength, leaveTap).then(
      (succ) => {
        getHousehold();
        getPeople();
        navigation.goBack();
      },
      (fail) => {
        console.log(fail);
      },
    );
  }
  function update() {}
  return (
    <View style={managePersonStyles.mainViewStyle}>
      <Text style={managePersonStyles.titleStyle}>{titleText}</Text>
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
        <GeneralButton
          title={buttonText}
          width="50%"
          onPress={onPressHandler}
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
  );
};
export default connect(null, {addNewPerson, getHousehold, getPeople})(
  ManagePersonScreen,
);
