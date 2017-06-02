import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

const MyNavScreen = ({ navigation, banner }) => (
  <ScrollView>
    <SampleText>{banner}</SampleText>
    <Button
      onPress={() => {
        navigation.goBack(null);
      }}
      title="Go back"
    />
  </ScrollView>
);

const MyHomeScreen = ({ navigation }) => (
  <View>
      <MyNavScreen
        banner="Home Screen"
        navigation={navigation}
      />
      <Text>This is a test</Text>
  </View>
);

export default class Animal extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
    constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder',
                    firstName: 'First Name' };
    this.state = { firstName: 'First Name' };    
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
          <Text>Animal.js</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(firstName) => this.setState({firstName})}
            value={this.state.firstName}
          />
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
        <Button
          onPress={() => navigate('Home', {user: 'Justin A Leggett', location: "I'm behind you.", text: this.state.text})}
          title="Home Page"
        />
        <Button
          onPress={() => navigate('Login', {user: 'Justin A Leggett', location: "I'm behind you.", text: this.state.text})}
          title="Login Page"
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
});

AppRegistry.registerComponent('KFL', () => Animal);