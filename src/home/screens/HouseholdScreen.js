import React, {useEffect} from 'react';
import {getHousehold} from '../../actions/household';
import {connect} from 'react-redux';
import {logout} from '../../actions/user';
import {View} from 'react-native';
import {householdScreenStyles} from './styles';
import {HouseholdComponent} from '../components';
import {GeneralButton, Spinner} from '../../authentification/components';

const HouseholdScreen = ({
  householdBackend,
  logout,
  navigation,
  getHousehold,
  isLoading,
}) => {
  useEffect(() => {
    getHousehold();
  }, []);
  return (
    <View style={householdScreenStyles.mainView}>
      <Spinner loading={isLoading} />
      <View style={householdScreenStyles.subView}>
        {householdBackend !== null ? (
          <HouseholdComponent
            data={householdBackend}
            onPress={() => {
              navigation.navigate('EditHousehold', {
                household: householdBackend,
              });
            }}
          />
        ) : null}
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
    isLoading: state.household.isLoading,
  };
};

export default connect(mapStateToProps, {logout, getHousehold})(
  HouseholdScreen,
);
