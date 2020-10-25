import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Switch } from 'react-native';
class Inputs extends Component {
    state = {
        username: '',
        password: '',
        logopt: ''
    }

    UserName = (x) => {
        this.setState({ username: x })
    }
    PassWord = (x) => {
        this.setState({ password: x })
    }

    login = (user, pass) => {
        var vU = this.validUserName(user);
        var vP = this.validPassWord(pass);
        if (vU && vP) {
            if (this.state.logopt == "register") {
                fetch("http://hacktx2020.southcentralus.cloudapp.azure.com:8080/api/signin", { 
        
                    // Adding method type 
                    method: "POST", 
                    
                    // Adding body or contents to send 
                    body: JSON.stringify({ 
                        username: user, 
                        password: pass
                    }), 
                    
                    // Adding headers to the request 
                    headers: { 
                        "Content-type": "application/json; charset=UTF-8"
                    } 
                })
            }
            else if (this.state.logopt == "signin") {
                fetch("http://hacktx2020.southcentralus.cloudapp.azure.com:8080/api/login", { 
        
                    // Adding method type 
                    method: "POST", 
                    
                    // Adding body or contents to send 
                    body: JSON.stringify({ 
                        username: user, 
                        password: pass
                    }), 
                    
                    // Adding headers to the request 
                    headers: { 
                        "Content-type": "application/json; charset=UTF-8"
                    } 
                })
            }
        }


    }

    handleChange=(e)=>{
        this.setState({
          logopt: e.target.value        
        })
    }

    isAlphaNumeric = (code) => {
        if (!(code > 47 && code < 58) && // numeric (0-9)
            !(code > 64 && code < 91) && // upper alpha (A-Z)
            !(code > 96 && code < 123)) { // lower alpha (a-z)
            return false;
        }
        return true;
    }

    validUserName = (s) => {
        if (s.length < 4) {
            return false;
        }
        for (var i = 0; i < s.length; i++) {
            if (!this.isAlphaNumeric(s.charCodeAt(i))) {
                return false;
            }
        }
        return true;
    }

    validPassWord = (s) => {
        if (s.length < 4) {
            return false;
        }
        for (var i = 0; i < s.length; i++) {
            var temp = s.charCodeAt(i);
            if (temp < 32 || temp > 126) {
                return false;
            }
        }
        return true;
    }
  
    render() {

        return (
            <View style = {styles.container}>

                <form>
                    <input type="radio" value="register" id="reg"
                    onChange={this.handleChange} name="logopt" />            
                    <label for="reg">Register!</label>

                    <input type="radio" value="signin" id="sig"
                    onChange={this.handleChange} name="logopt"/>            
                    <label for="sig">Sign In!</label>
                </form>

                <p>You are going to: {this.state.logopt}</p>
                <TextInput style = {styles.input}
                    placeholder = "Username"
                    autoCapitalize = "none"
                    onChangeText = {this.UserName}
                />
                <TextInput style = {styles.input}
                    secureTextEntry={true}
                    placeholder = "Password"
                    autoCapitalize = "none"
                    onChangeText = {this.PassWord}
                />
                <TouchableOpacity
                    style = {styles.submitButton}
                    className = "button"
                    onPress = {
                        () => this.login(this.state.username, this.state.password)
                    }
                >
                    <Text style = {styles.submitButtonText}> Let's go! </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default Inputs

const styles = StyleSheet.create({
    container: {
        paddingTop: 23
    },
    input: {
        margin: 15,
        height: 40,
        borderColor: '#4db8ff'
    },
    submitButton: {
        backgroundColor: '#4db8ff',
        padding: 10,
        margin: 15,
        height: 40,
        borderRadius: 7,
        padding: 8
    },
    submitButtonText:{
        backgroundColor: '#4db8ff',
        color: 'white'
    }
})