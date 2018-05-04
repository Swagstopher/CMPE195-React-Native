import React from 'react';
import { Font, LinearGradient,MapView } from 'expo';
import {ScrollView,Dimensions, Image, StatusBar,StyleSheet,TextInput, Text, View, Button, Alert } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

class FeedItem extends React.Component {
	render(){
	  var width = Dimensions.get('window');
		return(
					<View style={{marginBottom: 16}}>
					<Image style={{width: 375, aspectRatio: 16/9}} source={{uri:this.props.picture}} resizeMode='cover'  />
					<View style={{marginLeft: '2.5%'}}>
					<CircleImage image="https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg" />
					</View>
					<Text style={{alignItems: 'center',marginLeft: 96, fontSize: 20}}>Anyone want to play basketball?</Text>
					</View>
			);
	}
}

class CircleImage extends React.Component {
  render(){
    return(
      <Image style={{position:'absolute',bottom:-32,height: 64, width: 64, borderRadius: 32}} source={{url: this.props.image}}></Image>
      );
  }
}

class StoryCircle extends React.Component {
	render(){
		return(
			<View style={{}}>
			<View style={{alignItems:'center'}}>
			<Image style={{height: 64, width: 64, borderRadius: 32}} source={{uri:this.props.img}}/>
			<Text>{this.props.name}</Text>
			</View>
			</View>
			);

	}
}

export default class MainScreen extends React.Component {


render(){
	return(
		<View>
		   <StatusBar
     barStyle="dark-content"
   />
   
   <View style={{paddingBottom: '2.5%',marginTop: '5%',alignItems: 'center', borderStyle: 'solid', borderBottomWidth: 1, borderBottomColor: 'grey'}}>
   <Text style={{fontSize: 24}}>StrangerThings</Text>
   </View>
   <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{}}>
			<StoryCircle name="Lebron" img="https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg"/>
			<StoryCircle name="Lebron" img="https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg"/>
			<StoryCircle name="Lebron" img="https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg"/>
			<StoryCircle name="Lebron" img="https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg"/>
			<StoryCircle name="Lebron" img="https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg"/>
			<StoryCircle name="Lebron" img="https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg"/>
			<StoryCircle name="Lebron" img="https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg"/>
			<StoryCircle name="Lebron" img="https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg"/>
			<StoryCircle name="Lebron" img="https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg"/>
			<StoryCircle name="Lebron" img="https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg"/>
			<StoryCircle name="Lebron" img="https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg"/>
	</ScrollView>

	<TextInput 
	placeholderTextColor='white'
	style={{marginTop: '2.5%',backgroundColor: 'red', color: 'white', height: 48, paddingLeft: '10%'}}
	placeholder="Search: Coffee, Lunch, etc."/>
	<View style={{margin: '2.5%'}}><Text>Most Recent, tbd...</Text></View>
	<ScrollView style={{marginTop:0, paddingTop:0}}>
	<FeedItem picture='https://i.pinimg.com/736x/88/26/d9/8826d96d72f75075fd477e703d046b15--basketball.jpg' user="" desc="Anyone want to play basketball?"/>
	<FeedItem picture='https://i.pinimg.com/736x/88/26/d9/8826d96d72f75075fd477e703d046b15--basketball.jpg' user="" desc="Anyone want to play basketball?"/>
	<FeedItem picture='https://i.pinimg.com/736x/88/26/d9/8826d96d72f75075fd477e703d046b15--basketball.jpg' user="" desc="Anyone want to play basketball?"/>
	<FeedItem picture='https://i.pinimg.com/736x/88/26/d9/8826d96d72f75075fd477e703d046b15--basketball.jpg' user="" desc="Anyone want to play basketball?"/>
			</ScrollView>
		</View>
		);
}

}