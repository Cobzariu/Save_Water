import React from 'react';
import {View, TextInput, TouchableOpacity} from 'react-native';
import {colors} from '../../core/themes';
import {inputFieldStyles} from './styles';

const InputField = ({
  onChangeText,
  secureTextEntry,
  placeholder,
  value,
  autoCorrect,
  width,
  keyboardType,
  autoCapitalize,
  iconShow,
  iconHide,
  onPressIcon,
}) => {
  const setWidth = width ? {width: width} : null;
  return (
    <View style={[inputFieldStyles.inputView, setWidth]}>
      <TextInput
        autoCorrect={autoCorrect}
        value={value}
        secureTextEntry={secureTextEntry}
        style={inputFieldStyles.inputText}
        placeholder={placeholder}
        placeholderTextColor={colors.darkBlue}
        onChangeText={onChangeText}
        keyboardType={keyboardType}
        autoCapitalize={autoCapitalize}
      />
      <TouchableOpacity
        onPress={onPressIcon}
        style={inputFieldStyles.touchableOpacityStyle}>
        {secureTextEntry ? iconShow : iconHide}
      </TouchableOpacity>
    </View>
  );
};
export default InputField;
