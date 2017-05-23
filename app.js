import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';
import { StackNavigator } from 'react-navigation';


class ChatScreen extends React.Component {
  static navigationOptions = ({ navigation }) => ({
    title: `Chat with ${navigation.state.params.user}`,
    location: `Chat with ${navigation.state.params.location}`,
  });
  render() {
    // The screen's current route is passed in to `props.navigation.state`:
    const { params } = this.props.navigation.state;
    return (
      <View>
        <Text>Chatting with? {params.user}</Text>
        <Text>Where are you? {params.location}</Text>
        <Text>What text did you type? {params.text}</Text>        
      </View>
    );
  }
}

class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  };
    constructor(props) {
    super(props);
    this.state = { text: 'Useless Placeholder' };
  }
  render() {
    const { navigate } = this.props.navigation;
    return (
      <View>
          <Text>Hello, Chat App!</Text>
                  <TextInput
          style={{height: 40, borderColor: 'gray', borderWidth: 1}}
          onChangeText={(text) => this.setState({text})}
          value={this.state.text}
        />
        <Button
          onPress={() => navigate('Chat', {user: 'Justin A Leggett', location: "I'm behind you.", text: this.state.text})}
          title="Chat with Justin"
        />
      </View>
    );
  }
}

const Router = StackNavigator({
  Home: { screen: HomeScreen },
  Chat: { screen: ChatScreen },
});

AppRegistry.registerComponent('KFL', () => Router);