import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {generalButtonStyles} from './styles';

const GeneralButton = ({title, onPress}) => {
  return (
    <TouchableOpacity style={generalButtonStyles.buttonView} onPress={onPress}>
      <Text style={generalButtonStyles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GeneralButton;
