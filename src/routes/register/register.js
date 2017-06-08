import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import { Container, Content, Form, Item, Input,Label, Header, Button, Text} from 'native-base';
import axios from 'axios';

export default class Register extends React.Component {
  static navigationOptions = {
    title: 'Register',
    showLabel: false, 
    visible: false 
  };
    constructor(props) {
    super(props);
      this.state = { username: '' ,
                  password: ''};  
  }
  
  render() {
    const { navigate } = this.props.navigation;
    let auth = () => {
      console.log(this.state.username);
      console.log(this.state.password);      
    }
    return (
            <Container>
              <Header>
                <Text>Register</Text>
              </Header>
              <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input onChangeText = {(username) => this.setState({username})}/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input onChangeText = {(password) => this.setState({password})}/>
                    </Item>
                </Form>
                <Button rounded onPress={() => auth()}>
                  <Text>Sign Up</Text>
                </Button>
              </Content>
          </Container>
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

