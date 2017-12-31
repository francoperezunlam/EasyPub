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
  }
});

export {styles};
