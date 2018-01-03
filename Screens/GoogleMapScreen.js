import React from 'react';
import {Text, View} from 'react-native';
import MapView from 'react-native-maps';
import {styles} from '../Resources/Styles/Styles.js';

module.exports = class MyApp extends React.Component {
  state = {
    mapRegion: null,
    lastLat: null,
    lastLong: null,
  }
  componentDidMount() {
    this.watchID = navigator.geolocation.watchPosition((position) => {
      let region = {
        latitude:       position.coords.latitude,
        longitude:      position.coords.longitude,
        latitudeDelta:  0.00922*1.5,
        longitudeDelta: 0.00421*1.5
      }
      this.onRegionChange(region, region.latitude, region.longitude);
    });
  }
  onRegionChange(region, lastLat, lastLong) {
    this.setState({
      mapRegion: region,
      lastLat: lastLat || this.state.lastLat,
      lastLong: lastLong || this.state.lastLong
    });
  }
  render() {
    return (
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          region={this.state.mapRegion}
          showsUserLocation={true}
          followUserLocation={true}
          >
        </MapView>
      </View>
    );
  }
}
