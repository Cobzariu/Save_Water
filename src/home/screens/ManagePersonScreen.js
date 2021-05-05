import React, {useState} from 'react';
import {connect} from 'react-redux';
import {
  addNewPerson,
  getPeople,
  updatePerson,
  clearPersonMessage,
} from '../../actions/person';
import {getHousehold} from '../../actions/household';
import {View, Text, ScrollView} from 'react-native';
import InputSpinner from 'react-native-input-spinner';
import {managePersonStyles} from './styles';
import {GeneralButton, InputField} from '../../authentification/components';
import {RadioButton} from '../../questions/components';
import { colors } from '../../core/themes';

const ManagePersonScreen = ({
  route,
  navigation,
  addNewPerson,
  getHousehold,
  getPeople,
  updatePerson,
  clearPersonMessage,
  message,
}) => {
  const actionType = route.params.type;
  const personItem = route.params.person;
  const titleText =
    actionType === 'add'
      ? 'Enter some details about a new person'
      : 'Update some details about a person';
  const buttonText = actionType === 'add' ? 'Save' : 'Update';

  const defaultName = personItem ? personItem.name : '';
  const defaultBathsWeek = personItem ? personItem.bathNumberWeek : 1;
  const defaultShowersWeek = personItem ? personItem.showerNumberWeek : 1;
  const defaultShowerLength = personItem ? personItem.showerLengthMinutes : 1;
  const defaultLeaveTap = personItem
    ? personItem.waterRunningBrushingTeeth
    : false;

  const [name, setName] = useState(defaultName);
  const [bathsWeek, setBathsWeek] = useState(defaultBathsWeek);
  const [showersWeek, setShowersWeek] = useState(defaultShowersWeek);
  const [showerLength, setShowerLength] = useState(defaultShowerLength);
  const [leaveTap, setLeaveTap] = useState(defaultLeaveTap);
  const radio_props = [
    {label: 'Yes', value: true},
    {label: 'No', value: false},
  ];
  const onPressHandler = () => {
    if (actionType === 'add') save();
    else update();
  };
  function save() {
    addNewPerson(name, showersWeek, bathsWeek, showerLength, leaveTap).then(
      (succ) => {
        getHousehold();
        getPeople();
        navigation.goBack();
      },
      (fail) => {},
    );
  }
  function update() {
    updatePerson(
      personItem._id,
      name,
      showersWeek,
      bathsWeek,
      showerLength,
      leaveTap,
    ).then(
      (succ) => {
        getPeople();
        navigation.goBack();
      },
      (fail) => {},
    );
  }
  return (
    <ScrollView
      style={managePersonStyles.mainViewStyle}
      contentContainerStyle={managePersonStyles.contentContainerStyle}>
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
            Baths per week
          </Text>
          <InputSpinner
            onChange={(item) => setBathsWeek(item)}
            value={bathsWeek}
            initialValue={bathsWeek}
            width={130}
            min={0}
            max={100}
            textColor="white"
            color={colors.darkRed}
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
            color={colors.darkRed}
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
            color={colors.darkRed}
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
      {message ? (
        <Text style={managePersonStyles.errorMessage}>{message}</Text>
      ) : null}
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
            clearPersonMessage();
            navigation.goBack();
          }}
        />
      </View>
    </ScrollView>
  );
};
const mapStateToProps = (state) => {
  return {
    message: state.person.message,
  };
};
export default connect(mapStateToProps, {
  addNewPerson,
  getHousehold,
  getPeople,
  updatePerson,
  clearPersonMessage,
})(ManagePersonScreen);
