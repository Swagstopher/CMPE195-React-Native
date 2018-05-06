import React from 'react';
import { Font, LinearGradient } from 'expo';
import { ScrollView,StyleSheet,TextInput, Text, View, Button, Alert,Image } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

export default class TestProfileScreen extends React.Component {

static navigationOptions = {header: null };


render(){
	return(
		<View style={StyleSheet.absoluteFill}>
		<View style={{}}>
		<Image style={{width: 375, aspectRatio:1}} source={{uri:"https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg"}} />
		<Text onPress={() => this.props.navigation.navigate('Test')} style={{position:'absolute',top: '5%',left:'5%',color:'rgba(255,255,255,0.7)'}}>Back</Text>
		<View style={{backgroundColor: 'rgba(0,0,0,0.5)',position: 'absolute',bottom: 0,width:375}}>
				<Text style={{color: 'white',fontSize: 36}}>Lebron James</Text>
				<Text style={{color:'rgba(255,255,255,0.7)',alignItems:'center'}}>250{"\n"}Followers</Text>
			
				</View>
		</View>
		<ScrollView>
		<View style={{alignItems:'center'}}>
				<Text style={{margin: '5%'}}>Male Age: 33</Text>
			  <Text style={{margin: '5%'}}>
			  3× NBA champion (2012, 2013, 2016){"\n"}
3× NBA Finals MVP (2012, 2013, 2016){"\n"}
4× NBA Most Valuable Player (2009, 2010, 2012, 2013){"\n"}
14× NBA All-Star (2005–2018){"\n"}
3× NBA All-Star Game MVP (2006, 2008, 2018){"\n"}
11× All-NBA First Team (2006, 2008–2017){"\n"}
2× All-NBA Second Team (2005, 2007){"\n"}
5× NBA All-Defensive First Team (2009–2013){"\n"}
NBA All-Defensive Second Team (2014){"\n"}
NBA Rookie of the Year (2004){"\n"}
NBA scoring champion (2008){"\n"}
J. Walter Kennedy Citizenship Award (2017){"\n"}
2× AP Athlete of the Year (2013, 2016){"\n"}
2× Sports Illustrated Sportsperson of the Year (2012, 2016){"\n"}
USA Basketball Male Athlete of the Year (2012){"\n"}
2× Mr. Basketball USA (2002, 2003){"\n"}
Naismith Prep Player of the Year (2003){"\n"}
McDonald's All-American Game MVP (2003){"\n"}
3× Ohio Mr. Basketball (2001–2003)</Text>
		</View>
		</ScrollView>
    </View>
		);
}

}