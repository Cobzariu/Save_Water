import React from 'react';
import {View, Text} from 'react-native';
import {colors} from '../../core/themes';
import {adviceItemStyles} from './styles';

const AdviceItem = ({data}) => {
  function getColor(priority) {
    switch (priority) {
      case 1:
        return colors.darkRed;
      case 2:
        return colors.lightYellow;
      case 3:
        return colors.darkgreen;
    }
  }
  return (
    <View
      style={[
        adviceItemStyles.mainView,
        {backgroundColor: getColor(data.priority)},
      ]}>
      <Text style={adviceItemStyles.descriptionText}>{data.description}</Text>
    </View>
  );
};

export default AdviceItem;
