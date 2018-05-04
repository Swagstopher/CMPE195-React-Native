import React from 'react';
import { StatusBar, StyleSheet, Text, View,TextInput, Button,Alert } from 'react-native';
import { StackNavigator } from 'react-navigation';
import { Font, LinearGradient } from 'expo';
import SigninScreen from './assets/components/signin.js';
import SignupScreen from './assets/components/signup.js';
import MainScreen from './assets/components/main.js';


const RootStack = StackNavigator(
  {
    Signin: {
      screen: SigninScreen,
    },
    Signup: {
      screen: SignupScreen,
    },
    Main: {
      screen: MainScreen,
    }
  },
  {
    initialRouteName: 'Signin',
  },
  { 
    headerMode: 'screen', 
  },
  
);


export default class App extends React.Component {

  render() {
    return (
         <RootStack />
      );
  }
}