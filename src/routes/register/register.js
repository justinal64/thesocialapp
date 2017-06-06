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

import axios from 'axios';

export default class Register extends React.Component {
  static navigationOptions = {
    title: 'Register',
    showLabel: false, 
    visible: false 
  };
    constructor(props) {
    super(props);
    this.state = { jsonData: [],
                    userData: null}; 
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
        <Text>Register page</Text>
          <View style={styles.background}>
          <Text style={styles.header}>TheSocialApp</Text>
          <Text style={styles.header}>Put Image Here</Text>
          <Text style={styles.header}>Welcome</Text>  
          <Text>Username:</Text>  
          
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(userName) => this.setState({userName})}
            value={this.state.userName}
          />
          <Text>Password:</Text>  
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
        <Button
          onPress={() => navigate('Community', {user: 'Justin A Leggett', location: "I'm behind you.", text: this.state.text})}
          title="Register"
        />
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

AppRegistry.registerComponent('KFL', () => Register);

