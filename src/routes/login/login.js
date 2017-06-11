import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';
import { Container, Content, Form, Item, Input,Label, Header, Button, Text} from 'native-base';
import { onSignIn } from "../auth";

export default ({ navigation }) => (
            <Container>
              <Content>
                <Form>
                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input/>
                    </Item>
                    <Item floatingLabel last>
                        <Label>Password</Label>
                        <Input/>
                    </Item>
                </Form>
                <Button rounded onPress={() => {
                  onSignIn().then(() => navigation.navigate("SignedOut"));
                }}> 
                  <Text>Sign In</Text>
                </Button>
                <Button rounded onPress={() => navigate('Register')}>
                  <Text>Sign Up</Text>
                </Button>
              </Content>
          </Container>
);