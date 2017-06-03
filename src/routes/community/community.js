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


export default class Community extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
    constructor(props) {
    super(props);
    this.state = { jsonData: data,
                    userData: null}; 
  }
  
  componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        // const posts = res.data.data.children.map(obj => obj.data);
        this.setState({ userData: res.data });
        console.log(this.state.userData);
      });
  }
  
  render() {
    if(this.state.userData === null) return null;
    const { navigate } = this.props.navigation;
    return (
      <View>
          { this.state.userData.map((user, key) => (
            <View key={user.id}>
              <Text>Name: {user.name}</Text>
              <Text>Email: {user.email}</Text>
              {/*<Text key={user}>Username: {user.username}</Text>*/}
              <Text>Phone#: {user.phone}</Text>              
            </View>
          ))}

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
      // console.log(data[key]);
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

