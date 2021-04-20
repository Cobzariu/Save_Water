import React from 'react';
import {View, TextInput} from 'react-native';
import {inputFieldStyles} from './styles';

const InputField = ({
  onChangeText,
  secureTextEntry,
  placeholder,
  value,
  autoCorrect,
  width,
  keyboardType,
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
        placeholderTextColor="#003f5c"
        onChangeText={onChangeText}
        keyboardType={keyboardType}
      />
    </View>
  );
};
export default InputField;
