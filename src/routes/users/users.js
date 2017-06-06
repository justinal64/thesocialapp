import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import { Container, Content, List, ListItem, Text, Header, Button, Item, Input } from 'native-base';
import axios from 'axios';

export default class Users extends React.Component {
  static navigationOptions = {
    tabBarLabel: 'Users',
  };
    constructor(props) {
    super(props);
    this.state = { userData: [], 
                  setSearchText: '',
                  searchText: ''}; 
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
              <Content>
                <Header searchBar rounded>
                    <Item>
                        <Input placeholder="Search" 
                        />
                    </Item>
                    <Button transparent>
                        <Text>Search</Text>
                    </Button>
                </Header>                
                <List>
                    <ListItem itemDivider>
                        <Text>A</Text>
                    </ListItem>                    
                    <ListItem >
                      <Button transparent>
                        <Text>Aaron Bennet</Text>
                      </Button>
                    </ListItem>
                    <ListItem>
                        <Button transparent>
                          <Text>Bradley Horowitz</Text>
                        </Button>
                    </ListItem>
                    <ListItem itemDivider>
                        <Text>B</Text>
                    </ListItem>  
                    <ListItem>
                        <Button transparent>
                          <Text>Cory Horowitz</Text>
                        </Button>
                    </ListItem>
                </List>
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
  img: {
    
  }
});

AppRegistry.registerComponent('KFL', () => Users);

