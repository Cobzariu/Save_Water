import React, {useState} from 'react';
import {connect} from 'react-redux';
import {increaseCountPeople} from '../../actions/household';
import {savePerson, clearPersonMessage} from '../../actions/person';
import {signupComplete} from '../../actions/user';
import {View, Text, ScrollView} from 'react-native';
import {personScreenStyles} from './styles';
import {
  GeneralButton,
  InputField,
  Spinner,
} from '../../authentification/components';
import InputSpinner from 'react-native-input-spinner';
import {RadioButton} from '../components';
import {colors} from '../../core/themes';

const PersonScreen = ({
  countPeople,
  navigation,
  increaseCountPeople,
  personNumber,
  savePerson,
  signupComplete,
  clearPersonMessage,
  message,
}) => {
  const [name, setName] = useState('');
  const [bathsWeek, setBathsWeek] = useState(1);
  const [showersWeek, setShowersWeek] = useState(1);
  const [showerLength, setShowerLength] = useState(1);
  const [leaveTap, setLeaveTap] = useState(false);

  const [loading, setLoading] = useState(false);

  const radio_props = [
    {label: 'Yes', value: true},
    {label: 'No', value: false},
  ];

  return (
    <ScrollView
      style={personScreenStyles.mainViewStyle}
      contentContainerStyle={personScreenStyles.contentContainerStyle}>
      <Spinner loading={loading} />
      <Text style={personScreenStyles.titleStyle}>
        Enter some details person #{countPeople}
      </Text>
      <View style={personScreenStyles.questionsView}>
        <View style={personScreenStyles.locationTypeView}>
          <InputField
            placeholder="Name"
            value={name}
            onChangeText={setName}
            autoCorrect={false}
          />
        </View>
        <View style={personScreenStyles.locationTypeView}>
          <Text style={personScreenStyles.qustionTextStyle}>
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
        <View style={personScreenStyles.locationTypeView}>
          <Text style={personScreenStyles.qustionTextStyle}>
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
        <View style={personScreenStyles.locationTypeView}>
          <Text style={personScreenStyles.qustionTextStyle}>
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
        <View style={personScreenStyles.locationTypeView}>
          <Text style={personScreenStyles.qustionTextStyle}>
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
        <Text style={personScreenStyles.errorMessage}>{message}</Text>
      ) : null}
      <GeneralButton
        title="Next"
        onPress={() => {
          setLoading(true);
          savePerson(name, showersWeek, bathsWeek, showerLength, leaveTap).then(
            (success) => {
              setLoading(false);
              if (countPeople < personNumber) {
                increaseCountPeople(countPeople + 1);
                navigation.navigate('Person');
                setName('');
                setBathsWeek(1);
                setShowersWeek(1);
                setShowerLength(1);
                setLeaveTap(false);
                clearPersonMessage();
              } else {
                signupComplete();
                clearPersonMessage();
              }
            },
            (error) => {
              setLoading(false);
            },
          );
        }}
      />
    </ScrollView>
  );
};
const mapStateToProps = (state) => {
  return {
    countPeople: state.household.countPeople,
    personNumber: state.household.personNumber,
    message: state.person.message,
  };
};
export default connect(mapStateToProps, {
  increaseCountPeople,
  savePerson,
  signupComplete,
  clearPersonMessage,
})(PersonScreen);
