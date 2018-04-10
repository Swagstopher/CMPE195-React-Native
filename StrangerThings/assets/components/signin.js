import React from 'react';
import { StyleSheet,TextInput, Text, View, Button, Alert } from 'react-native';





class Signin extends React.Component {

	constructor(props) {
    super(props);
    this.state = {username: null, password: null}
    this.signin = this.signin.bind(this);
	};

    signin(){
		Alert.alert('Username: ' + this.state.username + '\n' + 'Password: ' + this.state.password);
	}

	render(){
		return (
  <View style={{paddingTop: '30%'}}>
  	<Text style={{color: '#FFF', fontSize: 24}}>
  	Username
  	</Text>
  	        <TextInput
          style={{height: 40}}
          placeholder="Username"
          onChangeText={(username) => this.setState({username})}
        />
  	<Text style={{color: '#FFF', fontSize: 24}}>
  	Password
  	</Text>
  	  	        <TextInput
          style={{height: 40}}
          placeholder="Password"
          onChangeText={(password) => this.setState({password})}
        />

         <View style={{paddingTop: '10%'}}>
<Button
style={{alignItems: 'center'}}
  onPress={this.signin}
  title="Boom."
  color="#FFF"
/>
  </View> 
  </View>
			);
	}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(242,74,74,1)',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Signin;
