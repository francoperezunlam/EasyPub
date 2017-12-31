import React, {Component} from 'react';
import {
  AppRegistry,
  Button,
  Platform,
  Text,
  View
} from 'react-native';

import Camera from 'react-native-camera';
import {styles} from '../Resources/Styles/Styles.js';

export default class QRScreen extends React.Component {
  constructor(){
    super();
    this.state = {
      activeButton: true,
      qrData: undefined
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text>
            Busque el <Text style={styles.textBold}>código QR</Text> en la mesa para escanearlo
          </Text>
        </View>
        <View style={styles.body}>
          <Camera
            barCodeTypes={[Camera.constants.BarCodeType.qr]}
            onBarCodeRead={(e) => this.setState({activeButton: false, qrData: e.data})}
            style={styles.preview}
            aspect={Camera.constants.Aspect.fill}>
          </Camera>
        </View>
        <View style={styles.footer}>
        <Button
          disabled={this.state.activeButton}
          onPress={this.showBarButton.bind(this)}
          title="Ver Info"
          ref="barInfoButton"
        />
        </View>
      </View>
    );
  }
  showBarButton(){
    this.setState({activeButton: true, qrData: undefined})
    this.props.navigation.navigate('BarDetails', {data: this.state.qrData})
  }
}
