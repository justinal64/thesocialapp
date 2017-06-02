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



export default class Community extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
    constructor(props) {
    super(props);
    this.state = { jsonData: data,
                    userData: []}; 
  }
  componentDidMount(){
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((responseJson) => {
        console.log(JSON.stringify(responseJson));
        this.setState({
          userDate: responseJson
        });
        testData(responseJson);
      })
      .catch((error) => {
        console.error(error);
      })
  };
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
          <Text>Community.js</Text>
          {Object.keys(this.state.userData).map((key) => {
            console.log(this.state.userData[key]);
          })}
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

// this is working
  testData = function(data) {
    Object.keys(data).map((key) => {
      console.log(data[key]);
  })};


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

AppRegistry.registerComponent('KFL', () => Community);