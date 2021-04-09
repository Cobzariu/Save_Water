import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/user';
import {View, Text} from 'react-native';
import {Button} from 'react-native-elements';
import { accountScreenStyles } from './styles';

const AccountScreen = ({navigation, logout}) => {
  return (
    <View style={accountScreenStyles.mainView}>
      <Text>AccountScreen</Text>
      <View style={accountScreenStyles.buttonView}>
      <Button
        title="Logout"
        onPress={() => {
          logout();
        }}
        buttonStyle={accountScreenStyles.buttonStyle}
      />
      </View>
      
    </View>
  );
};

export default connect(null, {logout})(AccountScreen);
