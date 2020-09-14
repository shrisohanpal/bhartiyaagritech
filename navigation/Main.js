import React from 'react';
import { View, Text } from 'react-native';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';


import HomeScreen from '../screens/HomeScreen';
import CropsScreen from '../screens/CropsScreen';
import CropDetailsScreen from '../screens/CropDetailsScreen';
import InformationScreen from '../screens/InformationScreen';
import AboutScreen from '../screens/AboutScreen';
import CropDetailsNavigator from './CropDetails';

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen,
  },
  Crops: {
    screen: CropsScreen,
  },
  CropDetails: {
    screen: CropDetailsNavigator,
  },
  Information: {
    screen: InformationScreen,
  },
  About: {
    screen: AboutScreen,
  }
});

export default createAppContainer(AppNavigator);