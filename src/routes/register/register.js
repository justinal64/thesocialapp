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
    this.state = { jsonData: [],
                    userData: null}; 
  }
  
  render() {
    const { navigate } = this.props.navigation;
    return (
            <Container>
              <Header>
                <Text>Register</Text>
              </Header>
              <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input />
                    </Item>
                </Form>
                <Button rounded>
                  <Text>Register</Text>
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

