import React, { Component } from 'react';
import {
  Platform,
  Text,
  View
} from 'react-native';

import {styles} from '../Resources/Styles/Styles.js';

export default class BarScreen extends Component<{}> {
  render() {
    const {params} = this.props.navigation.state;
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>
            Información del bar: {params.data}
          </Text>
        </View>
      </View>
    );
  }
}
