import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import CropDetailsScreen from '../screens/CropDetailsScreen';


const AppNavigator = createBottomTabNavigator({
  
    हिन्दी: {
        screen: CropDetailsScreen,
    },
    English: {
        screen: CropDetailsScreen,
    }
},
{
    tabBarOptions: {
        activeTintColor: '#673ab7',
        labelStyle: {
        fontSize: 30
     }
}
});

AppNavigator.navigationOptions = (props) => {
    return {
        headerTitle: props.navigation.state.params.item.name
    }
};

export default AppNavigator;