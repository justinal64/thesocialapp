import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  TextInput
} from 'react-native';

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
                    userName: '' ,
                    password: ''};   
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View style={styles.background}>
          <Text style={styles.header}>TheChurchApp</Text>
          <Text style={styles.header}>Put Image Here</Text>
          <Text style={styles.header}>Welcome</Text>  
          <Text>Username:</Text>  
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(userName) => this.setState({userName})}
            value={this.state.userName}
          />
          <Text>Password:</Text>  
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(password) => this.setState({password})}
            value={this.state.password}
          />
        <Button
          onPress={() => navigate('Register', {user: 'Justin A Leggett', location: "I'm behind you.", text: this.state.text})}
          title="Register"
        />
        <Button
          onPress={() => navigate('Community', {user: 'Justin A Leggett', location: "I'm behind you.", text: this.state.text})}
          title="Login"
        />
      </View>
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