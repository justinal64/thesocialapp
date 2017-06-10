import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { StackNavigator} from 'react-navigation';
import Login from './src/routes/login/login';
import Register from './src/routes/register/register';
// import global from './';

// this page is being used to setup my routes. 
const Router = StackNavigator({
  Login: { screen: Login },                            
  Register: { screen: Register}, 
});


AppRegistry.registerComponent('KFL', () => Router);
