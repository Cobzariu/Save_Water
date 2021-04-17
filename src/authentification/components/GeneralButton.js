import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import {generalButtonStyles} from './styles';

const GeneralButton = ({title, onPress, width, marginLeft}) => {
  const setWidth = width ? {width: width} : null;
  const setMarginLeft = marginLeft ? {marginLeft: marginLeft} : null;
  return (
    <TouchableOpacity
      style={[generalButtonStyles.buttonView, setWidth, setMarginLeft]}
      onPress={onPress}>
      <Text style={generalButtonStyles.textStyle}>{title}</Text>
    </TouchableOpacity>
  );
};

export default GeneralButton;
