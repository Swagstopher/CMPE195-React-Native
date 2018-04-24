import React from 'react';
import { Font, LinearGradient } from 'expo';
import { StyleSheet,TextInput, Text, View, Button, Alert } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

export default class SigninScreen extends React.Component {

static navigationOptions = { title: 'Signin', header: null };

  constructor(props){
    super(props);
    this.state = {email: '', password: ''}
  }

  render() {
    return (
     <LinearGradient
    colors={['rgba(242,74,74,1.0)','rgba(252,70,107,1.0)']}
    style={{padding: '10%',flex: 1}}
     >
      <Text style={{fontSize: 50}}>Signin</Text>

            <TextInput
          style={{height: 50, backgroundColor: 'white', marginBottom: '10%'}}
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
        />
      <TextInput
          style={{height: 50, backgroundColor: 'white'}}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
        />


              <Button
          title="Signin"
          color='#000'
          onPress={() => this.props.navigation.navigate('Signin')}
        />

              <Button
          title="Signup"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
     </LinearGradient>
    );
  }
}