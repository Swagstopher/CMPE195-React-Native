import React from 'react';
import { Font, LinearGradient } from 'expo';
import { StyleSheet,TextInput, Text, ScrollView, View, Button, Alert, DatePickerIOS, Picker } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

export default class SignupScreen extends React.Component {

static navigationOptions = { title: 'Signup', header: null };

  constructor(props){
    super(props);
    this.state = {name: '',date: new Date(), password: '', gender: ''}
  }

  render() {

    return (
     <LinearGradient
    colors={['rgba(242,74,74,1.0)','rgba(252,70,107,1.0)']}
    style={{padding: '10%',flex: 1, paddingBottom: 0}}
     >

      <Text style={{fontSize: 50}}>Register</Text>
<ScrollView
showsVerticalScrollIndicator={false}
>

      <TextInput
          style={{height: 40, backgroundColor: 'white', marginBottom: '10%'}}
          placeholder="Full Name"
          onChangeText={(name) => this.setState({name})}
        />
      <TextInput
          style={{height: 40, backgroundColor: 'white', marginBottom: '10%'}}
          placeholder="Email"
          onChangeText={(text) => this.setState({text})}
        />
              <TextInput
          style={{height: 40, backgroundColor: 'white', marginBottom: '10%'}}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />
      <TextInput
          style={{height: 40, backgroundColor: 'white', marginBottom: '10%'}}
          placeholder="Retype Password"
          secureTextEntry={true}
          onChangeText={(text) => this.setState({text})}
        />

        <DatePickerIOS
        mode='date'
          date={this.state.date}
          onDateChange={(date) => this.setState({date})}
        />

        <Picker
  selectedValue={this.state.gender}
  style={{ height: 20,marginBottom: '100%' }}
  onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
  <Picker.Item label="Male" value="m" />
  <Picker.Item label="Female" value="f" />
    <Picker.Item label="Other" value="alt" />
</Picker>

                </ScrollView>


                    <Button
          title="Signin"
          onPress={() => this.props.navigation.navigate('Signin')}
        />
              <Button title="Make User" onPress={
              	() => fetch('https://strangerthingz-backend.herokuapp.com/post?username=' + this.state.name + '&password=' + this.state.password)}/>


     </LinearGradient>
    );
  }
}