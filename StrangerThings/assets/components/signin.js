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
   <View style={{alignItems:'center'}}>
      <Text style={{fontSize: 48, marginBottom: '10%'}}>SiGN iN</Text>
      </View>
            <TextInput
          style={{borderRadius: 50,height: 50, fontSize: 16,paddingLeft: '5%', backgroundColor: 'rgba(255,255,255,0.7)', marginBottom: '10%'}}
          placeholder="Email"
          onChangeText={(email) => this.setState({email})}
        />
      <TextInput
          style={{borderRadius: 50,height: 50, fontSize: 16,paddingLeft: '5%', backgroundColor: 'rgba(255,255,255,0.7)'}}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => this.setState({password})}
        />

/*
this.props.navigation.navigate('Main')
*/

<View style={{alignItems:'center', marginTop: '50%'}}>
        <View style={{width: 120,height: 45,justifyContent: 'center',backgroundColor: 'black', borderRadius: 50, alignItems: 'center'}}>
          <Text onPress={() => 
fetch('http://strangerthingz-backend.herokuapp.com/authlogin?email=' + EMAIL + '&password=' + PASSWORD)
  .then(function(response) {
    if(response.status === 500){
      return {login: false};
    }else {
      return {login: true};
    }
  })
  .then(function(myJson) {
    if(myJson.login){
      this.props.navigation.navigate('Main');
    } else {
      Alert.alert('credentials incorrect');
      this.state.password = '';
      this.state.email = '';
    }

  });
 } style={{color: 'white', fontSize: 24}}>Sign In</Text>
        </View>
</View>
              <Button
          title="Signup"
          onPress={() => this.props.navigation.navigate('Signup')}
        />
     </LinearGradient>
    );
  }
}