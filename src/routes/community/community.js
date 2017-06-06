import React, { Component, Linking } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Image,
  Container,
  Header,
  Title,
  Content
} from 'react-native';
import styles from './styles';
import axios from 'axios';

export default class Community extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Community',
  };
    constructor(props) {
    super(props);
    this.state = { userData: null}; 
}
  
  componentDidMount() {
        axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        this.setState({ userData: res.data });
        console.log(this.state.userData);
      });
  }
  
  render() {
    if(this.state.userData === null) return null;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
          <Header>
            <Title>Community Activity</Title>
          </Header>
            <List>
          { this.state.userData.map((user, key) => (
            <View key={user.id}>
              {/*<Image source={require('../../imgs/user.jpg')} style={{width: 50, height: 50}}/>
              <Text>Name: {user.name}</Text>
              <Text>Email: {user.email}</Text>
              <Text>Username: {user.username}</Text>
              <Text>Phone#: {user.phone}</Text> 
              <Text>City: {user.address.city}</Text>                                         */}
            
              <ListItem>
                <Thumbnail square size={80} source={require('../../imgs/user.jpg')} />
                <Text>{user.username}</Text>
                <Text note>Check out my website it is a really cool {user.website} </Text>
              </ListItem>
              </View>
          ))}
          
            </List>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('KFL', () => Community);

