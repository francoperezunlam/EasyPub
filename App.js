import React, {Component} from 'react';
import {
  AppRegistry,
  Button,
  Platform,
  Text,
  View
} from 'react-native';

import {StackNavigator} from 'react-navigation';
import BarScreen from './Screens/BarScreen.js'
import QRScreen from './Screens/QRScreen.js'

const Navigator = StackNavigator({
  QR: {
    screen: QRScreen,
    navigationOptions: {
      header: null
    },
  },
  BarDetails: {
    screen: BarScreen,
    navigationOptions: {
      headerTitle: 'Información del Bar'
    }
  }
});

export default Navigator;
