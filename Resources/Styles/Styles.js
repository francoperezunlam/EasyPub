import React, { Component } from 'react';
import {StyleSheet} from 'react-native';

var styles = StyleSheet.create({
  container: {
    flex: 1
  },
  preview: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  header: {
    flex: 0.5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  body: {
    flex: 3
  },
  footer: {
    flex: 0.5,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'
  },
  centerText: {
    flex: 1,
    fontSize: 18,
    color: '#777'
  },
  textBold: {
    fontWeight: '500',
    color: '#000'
  },
  toolbar:{
      backgroundColor:'#E92F16',
      paddingTop:30,
      paddingBottom:10,
      flexDirection:'row'
  },
  toolbarButton:{
      width: 50,
      color:'#fff',
      textAlign:'center'
  },
  toolbarTitle:{
      color:'#fff',
      textAlign:'center',
      fontWeight:'bold',
      flex: 1
  },
  item: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    alignItems: 'center',
    padding: 15,
    paddingBottom: 30,
    margin: 10,
    marginBottom: 5,
    borderRadius: 10
  },
  itemNameContainer: {
    flex: 3,
    marginBottom: 15
  },
  itemNameText: {
    fontWeight:'bold'
  },
  image: {
    flex: 0.5,
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 10
  },
  barHeader: {
    flex: 1
  },
  barImage: {
    flex: 1
  },
  mapContainer: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  map: {
    ...StyleSheet.absoluteFillObject
  }
});

export {styles};
