import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';
import { spinnerStyles } from './styles';

const Spinner = ({loading}) => {
  return (
    <Modal visible={loading} transparent={true}>
      <View style={spinnerStyles.mainView}>
        <ActivityIndicator size="large" color="#f35588" />
      </View>
    </Modal>
  );
};

export default Spinner;
