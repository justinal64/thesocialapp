import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import Login from './src/routes/login/login';
import Community from './src/routes/community/community';
import Register from './src/routes/register/register';
import Users from './src/routes/users/users';

// this page is being used to setup my routes. 
const Router = TabNavigator({
  Login: { screen: Login }, 
  Community: { screen: Community }, 
  Register: { screen: Register }, 
  Users: { screen: Users },                          
});

AppRegistry.registerComponent('KFL', () => Router);