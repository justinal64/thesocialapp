import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput,
  Image
} from 'react-native';

import axios from 'axios';


export default class Profile extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
  };
    constructor(props) {
    super(props);
    this.state = { jsonData: [],
                    userData: null}; 
  }
  
  componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        this.setState({ userData: res.data });
        console.log(this.state.userData);
      });
  }
    // Display the single user that is signed on
  render() {
    if(this.state.userData === null) return null;
    const { navigate } = this.props.navigation;
    return (
      <View>
        
        <View key={this.state.userData[0].id}>
            <Image source={require('../../imgs/user.jpg')} style={{width: 50, height: 50}}/>
            <Text>Name: {this.state.userData[0].name}</Text>
            <Text>Username: {this.state.userData[0].username}</Text>            
            <Text>Email: {this.state.userData[0].email}</Text>    
            <Text>Phone: {this.state.userData[0].phone}</Text>                    
        </View>
        <View>
            <Text>Activity</Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('KFL', () => Profile);

