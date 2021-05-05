import React from 'react';
import {View, Text, Image, ImageBackground} from 'react-native';
import images from '../themes/images';
import {splashScreenStyles} from './styles';

const SplashScreen = () => {
  return (
    <View style={splashScreenStyles.mainView}>
      <ImageBackground
        source={images.waterDrop}
        style={splashScreenStyles.imageStyle}>
        <Text style={splashScreenStyles.textStyle}>Save Water</Text>
      </ImageBackground>
    </View>
  );
};
export default SplashScreen;
