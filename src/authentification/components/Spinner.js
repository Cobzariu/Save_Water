import React from 'react';
import {View, Modal, ActivityIndicator} from 'react-native';

const Spinner = ({loading}) => {
  return (
    <Modal visible={loading} transparent={true}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View
          style={{
            padding: 10,
            borderRadius: 5,
            width: '80%',
            alignItems: 'center',
          }}>
          <ActivityIndicator size="large" color="#f35588" />
        </View>
      </View>
    </Modal>
  );
};

export default Spinner;
