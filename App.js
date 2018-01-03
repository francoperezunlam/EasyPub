import React, {Component} from 'react';
import {
  AppRegistry,
  Button,
  Platform,
  Text,
  View
} from 'react-native';

import {StackNavigator, TabNavigator} from 'react-navigation';
import BarListScreen from './Screens/BarListScreen.js'
import BarDetailScreen from './Screens/BarDetailScreen.js'
import QRScreen from './Screens/QRScreen.js'
import GoogleMapScreen from './Screens/GoogleMapScreen.js'

const tabNavigator = TabNavigator({
  Map: {
    screen: GoogleMapScreen,
    navigationOptions: {
      header: null,
      tabBarVisible: true
    },
  },
  QR: {
    screen: QRScreen,
    navigationOptions: {
      header: null,
      tabBarVisible: false
    },
  },
  BarList: {
    screen: BarListScreen,
    navigationOptions: {
      header: null,
      tabBarVisible: false
    }
  }},{
    initialRouteName: 'QR',
    tabBarOptions: {
      style: {
        backgroundColor: '#E92F16',
      }
    }
  });

const stackNavigator = StackNavigator({
  Home: {
    screen: tabNavigator
  },
  BarDetail: {
    screen: BarDetailScreen,
    navigationOptions: {
      header: null
    }
  }
});

export default stackNavigator;
