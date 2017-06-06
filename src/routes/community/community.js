import React, { Component, Linking } from 'react';
import {
  AppRegistry,
  Image,
} from 'react-native';
import { Container, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Header } from 'native-base';
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
              <Container>
                <Header>
                  <Text>Community</Text>
                </Header>
                <Content>
                    { this.state.userData.map((user, key) => (
                  <Card key={user.id}>
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
                          {/*<Text>11h ago</Text>*/}
                      {/*<Button transparent>*/}
                          <Text>This is a super long comment This is a super long comment This is a super long comment</Text>
                      {/*</Button>*/}
                    </CardItem>
                   </Card>                                   
            ))}
                        
                </Content>
            </Container>
    );
  }
}



AppRegistry.registerComponent('KFL', () => Community);

          // { this.state.userData.map((user, key) => (
          //   <View key={user.id}>
              {/*<Image source={require('../../imgs/user.jpg')} style={{width: 50, height: 50}}/>
              <Text>Name: {user.name}</Text>
              <Text>Email: {user.email}</Text>
              <Text>Username: {user.username}</Text>
              <Text>Phone#: {user.phone}</Text> 
              <Text>City: {user.address.city}</Text>   
                                                    */}
          //       <Image source={require('../../imgs/user.jpg')} style={{width: 50, height: 50}}/>
          //       <Text>{user.username} Check out my website it is a really cool website</Text>
          //       <Text style={{color: 'blue'}} onPress={() => Linking.openURL('https://google.com')}> {user.website} </Text>
          //     </View>
          // ))}