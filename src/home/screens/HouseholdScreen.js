import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/user';
import {View} from 'react-native';
import {householdScreenStyles} from './styles';
import {HouseholdComponent} from '../components';
import {GeneralButton} from '../../authentification/components';

const HouseholdScreen = ({householdBackend, logout, navigation}) => {
  return (
    <View style={householdScreenStyles.mainView}>
      <View style={householdScreenStyles.subView}>
        <HouseholdComponent
          data={householdBackend}
          onPress={() => {
            navigation.navigate('EditHousehold', {household: householdBackend});
          }}
        />
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
