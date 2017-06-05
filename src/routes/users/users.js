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

export default class Users extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Users',
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
  
  render() {
    if(this.state.userData === null) return null;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        { this.state.userData.map((user, key) => (
          <View key={user.id}>
            <Image source={require('../../imgs/user.jpg')} style={{width: 50, height: 50}}/>
            <Text>Name: {user.name}</Text>
            <Text>Username: {user.username}</Text>
            <Text>Phone#: {user.phone}</Text>                                         
          </View>
        ))}
      </ScrollView>
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
  img: {
    
  }
});

AppRegistry.registerComponent('KFL', () => Users);

