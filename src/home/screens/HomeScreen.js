import React from 'react';
import {connect} from 'react-redux';
import {logout} from '../../actions/user';
import {View, Text, Button} from 'react-native';

const HomeScreen = ({navigation, logout}) => {
  return (
    <View>
      <Text>Home Screen</Text>
      <Button
        title="Logout"
        onPress={() => {
          logout();
        }}
      />
      <Button
        title="Add household"
        onPress={() => {
          navigation.navigate('Form', {screen: 'FirstHousehold'});
        }}
      />
    </View>
  );
};

export default connect(null, {logout})(HomeScreen);
