import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import { Container, Content, Form, Item, Input,Label, Header, Button, Text} from 'native-base';
import { TabNavigator} from 'react-navigation';
import uuid from 'uuid';
import axios from 'axios';
import global from '../../components/global/global';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <Button
      onPress={() => {
        navigation.goBack(null);
      }}
      title="Go back"
    />
  </ScrollView>
);


export default class Login extends React.Component {
  static navigationOptions = {
    title: 'Login',
  };
  
  constructor(props) {
  super(props);
  this.state = { text: 'Useless Placeholder',
                  username: '' ,
                  password: ''};   
  }
  render() {

    const { navigate } = this.props.navigation;
    let auth = () => {
      console.log(this.state.username);
      console.log(this.state.password);  
      console.log(uuid.v4()); 
      axios.post('http://localhost:3001/users', {
        username: this.state.username,
        password: this.state.password
      })
      .then(function (response) {
        console.log(response);
        global.ID_TOKEN = response.data.id_token;
        global.ACCCESS_TOKEN = response.data.access_token;
        console.log("global.ID_Token = ", global.ID_TOKEN);
        console.log("global.ACCESS_TOKEN = ", global.ACCCESS_TOKEN);
      })
      .catch(function (error) {
        console.log(error);
      });
      
      
         
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
                  <Text>Sign In</Text>
                </Button>
                <Button rounded onPress={() => navigate('Register')}>
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
  header: {
    textAlign: 'center',
    fontSize: 40
  },
  background: {
    backgroundColor: 'grey'
  },
});

AppRegistry.registerComponent('KFL', () => Login);