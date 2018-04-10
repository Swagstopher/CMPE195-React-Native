import React from 'react';
import { StyleSheet,TextInput, Text, View, Button, Alert } from 'react-native';
import Signin from './signin.js';
import {StackNavigator} from 'react-navigation';


class Main extends React.Component {
	render(){
		return (
<View style={{paddingTop:'10%'}}>
  <Text style={{color: '#FFF'}}><Text style={{fontSize: 48}}>SIGN</Text><Text style={{fontSize: 48}}> iN</Text><Text style={{fontSize: 24}}>/ up</Text>
  </Text>

<Signin/>

  </View>
			);
	}
}

export default Main;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(242,74,74,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});