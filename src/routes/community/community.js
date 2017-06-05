import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  View,
  ScrollView,
  TextInput,
  Image
} from 'react-native';
import { Container, Header, Title, Content, Button, Icon, List, ListItem, Text, Thumbnail } from 'native-base';
import styles from './styles';
import axios from 'axios';
import data from '../../components/data/data';

export default class Community extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Community',
  };
    constructor(props) {
    super(props);
    this.state = { jsonData: [],
                    userData: null}; 
  }
  
  render() {
    if(this.state.userData === null) return null;
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
          {/*{ this.state.userData.map((user, key) => (
            <View key={user.id}>
              <Image source={require('../../imgs/user.jpg')} style={{width: 50, height: 50}}/>
              <Text>Name: {user.name}</Text>
              <Text>Email: {user.email}</Text>
              <Text>Username: {user.username}</Text>
              <Text>Phone#: {user.phone}</Text> 
              <Text>City: {user.address.city}</Text>                                         
            </View>
          ))}*/}
          
        <Container style={styles.container}>
          <Header>
            <Title>Community Activity</Title>
          </Header>

          <Content>
            <List>
              <ListItem>
                <Thumbnail square size={80} source={require('../../imgs/user.jpg')} />
                <Text>Justin Smith</Text>
                <Text note>Check out this great article. </Text>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../../imgs/user.jpg')} />
                <Text>Katie Smith</Text>
                <Text note>One needs courage to be happy and smiling all time . . </Text>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../../imgs/user.jpg')} />
                <Text>Kallie Smith</Text>
                <Text note>Live a life style that matchs your vision</Text>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../../imgs/user.jpg')} />
                <Text>Zoey Smith</Text>
                <Text note>Failure is temporary, giving up makes it permanent</Text>
              </ListItem>
              <ListItem>
                <Thumbnail square size={80} source={require('../../imgs/user.jpg')} />
                <Text>Pax Smith</Text>
                <Text note>The biggest risk is a missed opportunity !!</Text>
              </ListItem>
            </List>
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

AppRegistry.registerComponent('KFL', () => Community);

