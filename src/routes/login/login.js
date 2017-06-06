import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import { Container, Content, Form, Item, Input,Label, Header, Button, Text} from 'native-base';
import { TabNavigator} from 'react-navigation';


const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    {/*<SampleText>{banner}</SampleText>*/}
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
    let users = { }
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
                  <Text>Login</Text>
                </Button>
                <Button rounded onPress={() => navigate('Register')}>
                  <Text>Register</Text>
                </Button>
              </Content>
          </Container>
// onPress={() => navigate('Community')}
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