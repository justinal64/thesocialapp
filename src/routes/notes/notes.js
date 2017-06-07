import React, { Component, Linking } from 'react';
import {
  AppRegistry,
  Image,
} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Header, Item, Input } from 'native-base';
import axios from 'axios';


export default class Notes extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Notes',
  };
    constructor(props) {
    super(props);
    this.state = { userData: null}; 
  }
  
  componentDidMount() {
        axios.get(`http://localhost:54080/api/posts`)
      .then(res => {
        this.setState({ userData: res.data });
        console.log(this.state.userData);
        console.log(this.state.userData[0]._id)
      });
  }
  
  render() {
    if(this.state.userData === null) return null;
    const { navigate } = this.props.navigation;
    return (
              <Container>
                <Header>
                  <Text>Notes</Text>
                </Header>
                <Content>
                    <Item underline>
                        <Input placeholder='Add Note' />
                    </Item>
                    { this.state.userData.map((user, key) => (
                  <Card key={user._id.timestamp}>
                    <CardItem>
                      <Left>
                        <Thumbnail source={require('../../imgs/user.jpg')} />
                        <Body>
                            <Text>{user.username}</Text>
                            <Text note>{user.company.name}</Text>
                            <Text>11h ago</Text>
                        </Body>
                      </Left>
                    </CardItem>
                    <CardItem cardBody>
                      <Image/>
                    </CardItem>
                    <CardItem>
                        <Text>{user.posts}</Text>
                    </CardItem>
                   </Card>                                   
            ))}
                        
                </Content>
            </Container>
    );
  }
}



AppRegistry.registerComponent('KFL', () => Notes);
