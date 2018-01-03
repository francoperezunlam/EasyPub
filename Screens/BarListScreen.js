import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  Image,
  ScrollView,
  StatusBar
} from 'react-native';

import {styles} from '../Resources/Styles/Styles.js';

export default class BarListScreen extends Component<{}> {
  collection = {
      bars: [
         {'name': 'Papas fritas', 'description': "Minutas - Acompañamiento", 'imageUrl': 'https://facebook.github.io/react-native/docs/assets/favicon.png', 'id': 1},
          {'name': 'Pizza', 'description': "Pizza", 'imageUrl': 'https://facebook.github.io/react-native/docs/assets/favicon.png', 'id': 2},
          {'name': 'Cerveza', 'description': "Cervezas Artesanales", 'imageUrl': 'https://facebook.github.io/react-native/docs/assets/favicon.png', 'id': 3},
          {'name': 'Papas fritas', 'description': "Minutas - Acompañamiento", 'imageUrl': 'https://facebook.github.io/react-native/docs/assets/favicon.png', 'id': 1},
           {'name': 'Pizza', 'description': "Pizza", 'imageUrl': 'https://facebook.github.io/react-native/docs/assets/favicon.png', 'id': 2},
           {'name': 'Cerveza', 'description': "Cervezas Artesanales", 'imageUrl': 'https://facebook.github.io/react-native/docs/assets/favicon.png', 'id': 3},
      ]
  }
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.toolbar}>
          <StatusBar
           backgroundColor='#E92F16'
          />
          <Text style={styles.toolbarTitle}>Lista de bares</Text>
        </View>
        <View style={styles.body}>
            <ScrollView>{
                  this.collection.bars.map((item, index) => (
                     <View key = {item.id} style = {styles.item}>
                         <Image
                             style={styles.image}
                             source={{uri: item.imageUrl}}
                         />
                        <View style={styles.itemNameContainer}>
                          <Text style={styles.itemNameText}>{item.name}</Text>
                          <Text>{item.description}</Text>
                        </View>
                     </View>
                  ))
              }
            </ScrollView>
         </View>
      </View>
    );
  }
}