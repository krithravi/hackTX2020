import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import '../style.css'

state = {
    username: '',
    password: ''
}

UserName = (x) => {
    this.setState({username: x})
}

PassWord = (x) => {
    this.setState({password: x})
}

export default function Login() {
  return (
      <div>
          Register!
          <br></br>
          <br></br>
          Login!
          <br></br>
          <br></br>
           <button class="button" type="button">Let's go!</button> 
      </div>
    
  );
}

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
