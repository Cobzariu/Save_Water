import React from 'react';
import {View, TextInput} from 'react-native';
import { inputFieldStyles } from './styles';

const InputField = ({onChangeText, secureTextEntry, placeholder,value}) => {
  return (
    <View style={inputFieldStyles.inputView}>
      <TextInput
        value={value}
        secureTextEntry={secureTextEntry}
        style={inputFieldStyles.inputText}
        placeholder={placeholder}
        placeholderTextColor="#003f5c"
        onChangeText={onChangeText}
      />
    </View>
  );
};
export default InputField;
