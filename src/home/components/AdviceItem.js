import React from 'react';
import {View, Text} from 'react-native';
import {adviceItemStyles} from './styles';

const AdviceItem = ({data}) => {
  function getColor(priority) {
    switch (priority) {
      case 1:
        return '#fb5b5a';
      case 2:
        return '#e9ed6b';
      case 3:
        return '#1db35b';
    }
  }
  return (
    <View style={[adviceItemStyles.mainView, {backgroundColor: getColor(data.priority)}]}>
      <Text style={adviceItemStyles.descriptionText}>{data.description}</Text>
    </View>
  );
};

export default AdviceItem;
