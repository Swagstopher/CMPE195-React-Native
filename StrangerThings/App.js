import React from 'react';
import { StatusBar, StyleSheet, Text, View,TextInput, Button,Alert } from 'react-native';
import Test from './assets/components/test.js';
import Signin from './assets/components/signin.js';
import Main from './assets/components/main.js';
import { Font, LinearGradient } from 'expo';




export default class App extends React.Component {
/*
  componentDidMount() {
    Font.loadAsync({
      'PurplePurse': require('./assets/fonts/PurplePurse.ttf')
    });
  }
  */

  render() {
    return (
        <LinearGradient
          colors={[' rgba(242,74,74,1)','rgba(252,70,107,1)']}
          style={{padding: '10%',flex: 1}}
          >
                      <StatusBar barStyle="light-content"/>
            <Main/>
          </LinearGradient>
      );
  }
}