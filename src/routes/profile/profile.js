import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Image
} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body } from 'native-base';
import axios from 'axios';


export default class Profile extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Profile',
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
    // Display the single user that is signed on
  render() {
    if(this.state.userData === null) return null;
    const { navigate } = this.props.navigation;
    return (
            <Container>
              <Content>
                  <Card style={{ flex: 0 }}>
                      <CardItem>
                          <Left>
                              <Thumbnail source={require('../../imgs/user.jpg')} />
                              <Body>
                                  <Text>Justin Leggett</Text>
                                  <Text note>Joined April 15, 2016</Text>
                              </Body>
                          </Left>
                      </CardItem>
                      <CardItem>
                          <Body>
                              <Image style={{ resizeMode: 'cover' }} source={require('../../imgs/user.jpg')} />
                              <Text>
                                  I write code and stuff....
                              </Text>
                              {/*<Button transparent textStyle={{color: '#87838B'}}>
                                  <Text>1,926 stars</Text>
                              </Button>*/}
                          </Body>
                      </CardItem>
                  </Card>
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

AppRegistry.registerComponent('KFL', () => Profile);

