import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/user';
import {View, Text, Button} from 'react-native';

const AccountScreen = ({navigation, logout}) => {
  return (
    <View>
      <Text>AccountScreen</Text>
      <Button
        title="Logout"
        onPress={() => {
          logout();
        }}
      />
    </View>
  );
};

export default connect(null, {logout})(AccountScreen);
