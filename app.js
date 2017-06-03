import React from 'react';
import {
  AppRegistry,
  Text,
  View,
  Button,
  TextInput
} from 'react-native';

import { StackNavigator } from 'react-navigation';
import Home from './src/routes/home/home';
import Animal from './src/routes/animals/animals';
import Login from './src/routes/login/login';
import Community from './src/routes/community/community';


const Router = StackNavigator({
  Login: { screen: Login }, 
  Home: { screen: Home },
  Animal: { screen: Animal },
  Community: { screen: Community },      
});

AppRegistry.registerComponent('KFL', () => Router);