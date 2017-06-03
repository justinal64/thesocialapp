import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput
} from 'react-native';

import data from '../../components/data/data.json';
import axios from 'axios';


export default class Register extends React.Component {
  static navigationOptions = {
    title: 'Register',
  };
    constructor(props) {
    super(props);
    this.state = { jsonData: data,
                    userData: null}; 
  }
  
  // componentDidMount() {
  //       axios.get(`https://jsonplaceholder.typicode.com/users`)
  //     .then(res => {
  //       // const posts = res.data.data.children.map(obj => obj.data);
  //       this.setState({ userData: res.data });
  //       console.log(this.state.userData);
  //     });
  // }
  
  render() {
    return (
      <View>
        <Text>Register page</Text>
      
        <Button
          onPress={() => navigate('Home', {user: 'Justin A Leggett', location: "I'm behind you.", text: this.state.text})}
          title="Home Page"
        />
        <Button
          onPress={() => navigate('Login')}
          title="Login Page"
        />   
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

AppRegistry.registerComponent('KFL', () => Register);

