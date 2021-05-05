import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {radioButtonStyles} from './styles';

const RadioButton = ({props, selectedValue, setSelectedValue}) => {
  return (
    <View style={radioButtonStyles.mainView}>
      {props.map((res) => {
        return (
          <View key={res.value} style={radioButtonStyles.container}>
            <Text style={radioButtonStyles.radioText}>{res.label}</Text>
            <TouchableOpacity
              style={radioButtonStyles.radioCircle}
              onPress={() => {
                setSelectedValue(res.value);
              }}>
              {selectedValue === res.value && (
                <View style={radioButtonStyles.selectedRb} />
              )}
            </TouchableOpacity>
          </View>
        );
      })}
    </View>
  );
};

export default RadioButton;
