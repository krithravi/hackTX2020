/*import * as React from 'react';
import { Text, View, TextInput, StyleSheet, Image } from 'react-native'; */
import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import '../style.css';


var state = {
    username: '',
    password: ''
}

var UserName = (x) => {
    this.setState({username: x})
}


var PassWord = (x) => {
    this.setState({password: x})
}


class Login extends Component {
    render() {
        return (
            <div>
          Register!
          <br></br>
          <br></br>
          Login!
          <br></br>
          <br></br>
           <button class="button" type="button">Let's go!</button> 

           <View style = {styles.container}>
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Email"
                    autoCapitalize = "none"
                    onChangeText = {this.UserName}
                />
                
                <TextInput style = {styles.input}
                    underlineColorAndroid = "transparent"
                    placeholder = "Password"
                    autoCapitalize = "none"
                    onChangeText = {this.PassWord}
                />
                
                <TouchableOpacity
                    style = {styles.submitButton}
                    onPress = {
                        () => this.login(this.state.username, this.state.password)
                    }>
                    <Text style = {styles.submitButtonText}> Let's go! </Text>
                </TouchableOpacity>
            </View>
            </div>
        )
    }
}


export default Login;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    padding: 24,
  },
  paragraph: {
    margin: 24,
    marginTop: 0,
    fontSize: 14,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  logo: {
    height: 128,
    width: 128,
  }
});
