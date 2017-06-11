import React from "react";
import { StackNavigator, TabNavigator } from "react-navigation";

import Community from './community/community';
import Login from './login/login';
import Notes from './notes/notes';
import Profile from './profile/profile';
import Register from './register/register';
import Users from './users/users';


export const SignedOut = StackNavigator({
  Register: {
    screen: Register,
    navigationOptions: {
      title: "Sign Up"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Sign In"
    }
  }
});

export const SignedIn = TabNavigator({
  Community: {
    screen: Community,
    navigationOptions: {
      tabBarLabel: "Community",
    }
  }
});

export const createRootNavigator = (signedIn = false) => {
  return StackNavigator(
    {
        Register: {
            screen: Register,
            navigationOptions: {
            title: "Sign Up"
            }
        },
        Login: {
            screen: Login,
            navigationOptions: {
            title: "Sign In"
            }
        }
    },
    {
      headerMode: "none",
      mode: "modal",
      initialRouteName: signedIn ? "SignedIn" : "SignedOut"
    }
  );
};