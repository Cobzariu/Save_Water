import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/user';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import {householdScreenStyles} from './styles';
import {HouseholdComponent} from '../components';
import {GeneralButton} from '../../authentification/components';

const HouseholdScreen = ({householdBackend, logout}) => {
  return (
    <View style={householdScreenStyles.mainView}>
      <View style={householdScreenStyles.subView}>
        <HouseholdComponent data={householdBackend} />
      </View>
      <View style={householdScreenStyles.buttonView}>
        <GeneralButton
          title="Logout"
          onPress={() => {
            logout();
          }}
        />
      </View>
    </View>
  );
};
const mapStateToProps = (state) => {
  return {
    householdBackend: state.household.householdBackend,
  };
};

export default connect(mapStateToProps, {logout})(HouseholdScreen);
