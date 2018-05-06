import React from 'react';
import { Font, LinearGradient,MapView } from 'expo';
import {ScrollView,Dimensions, Image, StatusBar,StyleSheet,TextInput, Text, View, Button, Alert } from 'react-native';
import {
  StackNavigator,
} from 'react-navigation';

class CircleImage extends React.Component {
  render(){
    return(
      <View>
      <Image onPress={() => this.props.navigation.navigate('TestProfile')} style={{position:'absolute',bottom:-32, width: 64, aspectRatio: 1, borderRadius: 32}} source={{url: this.props.image}}></Image>
      <Text style={{position: 'absolute', bottom: -52
      }}>@Lebron</Text>
      </View>
      );
  }
}

class FeedItem extends React.Component {
	render(){
	  var width = Dimensions.get('window');
		return(
					<View style={{marginBottom: "2.5%"}}>
					<Image style={{width: 375, aspectRatio: 16/9}} source={{uri:this.props.picture}} resizeMode='cover'  />
					<View style={{marginLeft: '2.5%'}}>
					<CircleImage image="https://pbs.twimg.com/profile_images/608444172836683776/NyrRoU0X_400x400.jpg" />
					</View>
					<Text style={{alignItems: 'center',marginLeft: 96, fontSize: 20}}>Anyone want to play basketball?</Text>
					</View>
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

class StoryFeed extends React.Component {
  render(){
    return(
         <ScrollView showsHorizontalScrollIndicator={false} horizontal={true} style={{backgroundColor: '',marginTop:'0%',marginBottom: '0%'}}>
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
      );
  }
}

class Footer extends React.Component {
  render(){
    return(
      <View style={{position:'absolute', bottom: '5%', right:'5%'}}>
      <View style={{height: 64, width: 64, borderRadius:32, backgroundColor:'red',alignItems:'center',justifyContent: 'center'}}><Text style={{fontSize:48}}>+</Text></View>
      </View>
      
      );
  }
}

export default class TestScreen extends React.Component {

static navigationOptions = {header: null };


render(){
	return(
		<View style={StyleSheet.absoluteFill}>
		<View style={{alignItems: 'center',borderStyle: 'solid', borderBottomWidth: 1, borderBottomColor: 'grey'}}><Text style={{margin:'5%',fontSize:24}}>StrangerThings</Text></View>
		<StoryFeed/>
		<ScrollView>
			<FeedItem picture='https://i.pinimg.com/736x/88/26/d9/8826d96d72f75075fd477e703d046b15--basketball.jpg' user="Lebron" desc="Anyone want to play basketball?"/>
						<FeedItem picture='https://i.pinimg.com/736x/88/26/d9/8826d96d72f75075fd477e703d046b15--basketball.jpg' user="Lebron" desc="Anyone want to play basketball?"/>
						<FeedItem picture='https://i.pinimg.com/736x/88/26/d9/8826d96d72f75075fd477e703d046b15--basketball.jpg' user="Lebron" desc="Anyone want to play basketball?"/>
		</ScrollView>
		<Footer></Footer>
    </View>
		);
}

}