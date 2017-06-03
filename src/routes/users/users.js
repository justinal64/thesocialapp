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


export default class Users extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Users',
  };
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
          <Text>Users Page</Text>
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

AppRegistry.registerComponent('KFL', () => Users);

