import React from 'react';
import {Button,Text,View} from 'react-native';
import MapView from 'react-native-maps';
import {styles} from '../Resources/Styles/Styles.js';

module.exports = class MyApp extends React.Component {
  state = {
    mapRegion: null,
    lastLat: null,
    lastLong: null,
    markers: [{
        id: '1',
        latitude: -34.630144,
        longitude: -58.629753,
        title: 'Antares',
        subtitle: 'Bar muy cheto',
        direction: 'La concha de tu vieja',
        ref: null
   },{
       id: '2',
       latitude: -34.631173,
       longitude: -58.629753,
       title: 'Cervelar',
       subtitle: 'Bar muy cheto',
       direction: 'La concha de tu abuela',
       ref: null
   }]
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
          {this.state.markers.map(marker => (
            <MapView.Marker
              key={marker.id}
              ref={ref => {marker.ref = ref}}
              coordinate={{latitude:marker.latitude, longitude:marker.longitude}}
              title={marker.title}
              image={require('../Resources/Images/beer.png')}
              description={marker.description}
            >
              <MapView.Callout
              onPress={(e) => this.props.navigation.navigate('BarDetail', {data: marker.title})}
              >
                <Text style={styles.textBold}>{marker.title}</Text>
                <Text>Descripción: {marker.subtitle}</Text>
                <Text>Dirección: {marker.direction}</Text>
                <Text style={styles.toolbarTitle,{color:'#E92F16'}}>Toque aquí para mas detalle</Text>
              </MapView.Callout>
            </MapView.Marker>
          ))}
        </MapView>
      </View>
    );
  }
}
