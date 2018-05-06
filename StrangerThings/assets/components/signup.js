import React from 'react';
import { Font, LinearGradient } from 'expo';
import { TouchableHighlight,Modal, StatusBar,StyleSheet,TextInput, Text, ScrollView, View, Button, Alert, DatePickerIOS, Picker } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

export default class SignupScreen extends React.Component {

static navigationOptions = { title: 'Signup', header: null };

  constructor(props){
    super(props);
    this.state = {name: '',email:'',date: new Date(), password: '', reup:'',gender: null,modalAgeVisible: false, modalGenderVisible: false}
  }

  setAgeModalVisible(visible) {
    this.setState({modalAgeVisible: visible});
  }

    setGenderModalVisible(visible) {
    this.setState({modalGenderVisible: visible});
  }

  render() {

    return (
     <LinearGradient
    colors={['rgba(242,74,74,1.0)','rgba(252,70,107,1.0)']}
    style={{padding: '10%',flex: 1, paddingBottom: 0}}
     >
   <StatusBar
     barStyle="light-content"
   />
   <View style={{alignItems:'center'}}>
      <Text style={{fontSize: 50}}>Register</Text>
      </View>
<ScrollView
showsVerticalScrollIndicator={false}
>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalGenderVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
     <LinearGradient
    colors={['rgba(242,74,74,1.0)','rgba(252,70,107,1.0)']}
    style={{padding: '10%',flex: 1, paddingBottom: 0,justifyContent:'center'}}
     >            <View>
        <Picker
  selectedValue={this.state.gender}
  style={{}}
  onValueChange={(itemValue, itemIndex) => this.setState({gender: itemValue})}>
  <Picker.Item label="Male" value="Male" />
  <Picker.Item label="Female" value="Female" />
    <Picker.Item label="Other" value="Complicated" />
</Picker>
              <TouchableHighlight
                onPress={() => {
                   this.setGenderModalVisible(!this.state.modalGenderVisible);
                }}>
                <View style={{alignItems:'center'}}>
                <Text style={{marginTop: '20%'}}>Change</Text>
                </View>
              </TouchableHighlight>
            </View>
          </LinearGradient>
        </Modal>

        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalAgeVisible}
          onRequestClose={() => {
            alert('Modal has been closed.');
          }}>
     <LinearGradient
    colors={['rgba(242,74,74,1.0)','rgba(252,70,107,1.0)']}
    style={{padding: '10%',flex: 1, paddingBottom: 0,justifyContent:'center'}}   >        
    <View>
        <DatePickerIOS
        mode='date'
          date={this.state.date}
          onDateChange={(date) => this.setState({date})}
        />
              <TouchableHighlight
                onPress={() => {
                  this.setAgeModalVisible(!this.state.modalAgeVisible);
                }}>
                <View style={{alignItems:'center'}}>
                <Text style={{marginTop: '20%'}}>Change</Text>
                </View>
              </TouchableHighlight>
            </View>
          </LinearGradient>
        </Modal>
{/*
      <TextInput
          style={{marginTop:'10%',borderRadius: 50,height: 50, fontSize: 16,paddingLeft: '5%', backgroundColor: 'rgba(255,255,255,0.7)', marginBottom: '10%'}}
          placeholder="Full Name"
          onChangeText={(name) => this.setState({name})}
        />
        */}
      <TextInput
          style={{borderRadius: 50,height: 50, fontSize: 16,paddingLeft: '5%', backgroundColor: 'rgba(255,255,255,0.7)', marginBottom: '10%'}}
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
        />
              <TextInput
          style={{borderRadius: 50,height: 50, fontSize: 16,paddingLeft: '5%', backgroundColor: 'rgba(255,255,255,0.7)', marginBottom: '10%'}}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />
      <TextInput
          style={{borderRadius: 50,height: 50, fontSize: 16,paddingLeft: '5%', backgroundColor: 'rgba(255,255,255,0.7)', marginBottom: '10%'}}
          placeholder="Retype Password"
          secureTextEntry={true}
          onChangeText={(reup) => this.setState({reup})}
        />
        <View style={{alignItems: 'center'}}>
        <Text onPress={() => {
            this.setAgeModalVisible(true);
          }} style={{fontSize: 24}}>Birthdate: {this.state.date.toString().split(' ')[1]} {this.state.date.toString().split(' ')[2]} {this.state.date.toString().split(' ')[3]}</Text>
        <View style={{marginTop:'10%'}}>
          <Text style={{fontSize: 24}}onPress={() => {
            this.setGenderModalVisible(true);}}>Gender: {this.state.gender}</Text>
          </View>
        </View>
                </ScrollView>


                    <Button
          title="Signin"
          onPress={() => this.props.navigation.navigate('Signin')}
        />
              <Button title="Make User" onPress={
                () => {
                if(this.state.password != this.state.reup){
                  Alert.alert('Both Password Entries arent the same');
                } else {
                  fetch('https://strangerthingz-backend.herokuapp.com/authpost?email=' + this.state.email + '&password=' + this.state.password)
                  .then((response) => response.text()
                  
                  )
                }
                }
                }

                
                />


     </LinearGradient>
    );
  }
}