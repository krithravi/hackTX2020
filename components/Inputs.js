import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Switch } from 'react-native';
import SwitchToggle from "react-native-switch-toggle";
import '../style.css';
import Report from './Report'
import Profile from './Profile'

class Inputs extends Component {
    state = {
        username: '',
        password: '',
        logopt: '',
        token: '',
        reportInt: '',
        int: '',
        zipcode: '',
        points: 0,
        streak: 0,
        hideLog: "block",
        hideRep: "none",
        temp: ' '
    }

    UserName = (x) => {
        this.setState({ username: x })
    }
    PassWord = (x) => {
        this.setState({ password: x })
    }

    SetTemp = (x) => {
        this.setState({ temp: x })
    }

    SetPoints = (x) => {
        this.setState({ points: x })
    }

    SetStreak = (x) => {
        this.setState({ streak: x })
    }

    async checkNewPass (x) {
        // if it's valid, set it
        // give it over to database
        // tell the user it's ok
        if (this.validPassWord(x)) {
            this.PassWord(x);
            var meep = await fetch("http://hacktx2020.southcentralus.cloudapp.azure.com:8080/api/reset-password", { 
                method: "POST", 
                body: JSON.stringify({ 
                    username: this.state.username, 
                    newpassword: this.state.password,
                }), 
                headers: { 
                    "Content-Type": "application/json; charset=UTF-8",
                    "Authorization": "Bearer " + this.state.token
                } 
            })

            var data = await meep.json();
            if (meep.status != 200) {
                alert("Error, try again! :)");
            }
            else {
                alert("Submitted!");
            }
        }
        else {
            alert("Attempt failed.");
        }
    }



    ZipCode = (x) => {
        this.setState({ zipcode: x })
    }

    async login (user, pass) {
        var vU = this.validUserName(user);
        var vP = this.validPassWord(pass);
        if (vU && vP) {

            if (this.state.logopt == "register") {
                var meep = await fetch("http://hacktx2020.southcentralus.cloudapp.azure.com:8080/api/register", { 
                    method: "POST", 
                    body: JSON.stringify({ 
                        username: user, 
                        password: pass
                    }), 
                    headers: { 
                        "Content-Type": "application/json; charset=UTF-8"
                    } 
                })

                //meep.json() // WORKED!!! eureka
                //.then(data => console.log(data["token"])); // WORKED!!! eureka
                var data = await meep.json();
                //console.log("hi" + meep.status); // previously useful 
                if (meep.status != 200) {
                    alert("Error, try again! :)");
                }
                else {
                    this.state.token = data["token"];
                    // take me to the next place!
                    document.getElementById("report").style.display = "block";
                    this.state.hideRep = "block";
                    this.state.hideLog = "none";
                }
            }
            else if (this.state.logopt == "signin") {
                var leep = await fetch("http://hacktx2020.southcentralus.cloudapp.azure.com:8080/api/points/" + user)
                var egg = await leep.json();

                egg = egg["points"];
                console.log(egg);
                this.state.points = egg;

                var zeep = await fetch("http://hacktx2020.southcentralus.cloudapp.azure.com:8080/api/streak/" + user)
                egg = await zeep.json();
                egg = egg["streak"];
                this.state.streak = egg;

                var meep = await fetch("http://hacktx2020.southcentralus.cloudapp.azure.com:8080/api/login", { 
                    method: "POST", 
                    body: JSON.stringify({ 
                        username: user, 
                        password: pass
                    }), 
                    headers: { 
                        "Content-Type": "application/json; charset=UTF-8"
                    } 
                })

                var data = await meep.json();

                if (meep.status != 200) {
                    alert("Error, try again! :)");
                }
                else {
                    this.state.token = data["token"];
                    // hide all, take me to next place
                    document.getElementById("log").style.display = "none";
                    //this.state.hideRep = "show";
                    document.getElementById("report").style.display = "block";
                    this.state.hideRep = "block";
                    this.state.hideLog = "none";
                }
            }
        }
    }

    handleChange=(e)=>{
        this.setState({
          logopt: e.target.value        
        })
    }

    symptomChange=(e)=>{
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

  
    async counter () {
        // temp is now a nodelist
        var temp = document.getElementsByClassName("sym");
        for (var i = 0; i < temp.length; i++) {
            // if the item is checked, append 1 to the string
            // else, append a zero
            if (temp.item(i).checked) {
                this.state.int += '1';
            }
            else {
                this.state.int += '0';
            }
        }
        if (this.state.zipcode.length != 0) {
            var meep = await fetch("http://hacktx2020.southcentralus.cloudapp.azure.com:8080/api/report", { 
                method: "POST", 
                body: JSON.stringify({ 
                    username: this.state.username, 
                    zipcode: this.state.zipcode,
                    symptoms: parseInt(this.state.int, 2)
                }), 
                headers: { 
                    "Content-Type": "application/json; charset=UTF-8",
                    "Authorization": "Bearer " + this.state.token
                } 
            })

            var data = await meep.json();
            if (meep.status != 200) {
                alert("Error, try again! :)");
            }
            else {
                this.state.token = data["token"];
                alert("Submitted!");
            }
        }
    }


    render() {
        
        return (
            <View style = {styles.container}>
                <div id="log" style={{display: this.state.hideLog}}>
                    <h1>
                        Welcome!
                    </h1>
                    <form>
                        <input type="radio" value="register" id="reg"
                        onChange={this.handleChange} name="logopt" />            
                        <label>Register!</label>

                        <input type="radio" value="signin" id="sig"
                        onChange={this.handleChange} name="logopt"/>            
                        <label>Sign In!</label>
                    </form>

                    <TextInput style = {styles.input}
                        placeholder = "Username"
                        autoCapitalize = "none"
                        onChangeText = {this.UserName}
                    />
                    <br></br>
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
                </div>
                <div id="report" style={{display: this.state.hideRep}} async>
                    <Report />
                    <TextInput style = {styles.input}
                        placeholder = "Zip code"
                        autoCapitalize = "none"
                        onChangeText = {this.ZipCode}
                    />
                    <TouchableOpacity
                        style = {styles.submitButton}
                        className = "button"
                        onPress = {
                            () => this.counter()
                        }
                    >
                        <Text style = {styles.submitButtonText}> I'm done </Text>
                    </TouchableOpacity>
                    <h1>
                        Your User Information
                    </h1>
                    Username: {this.state.username}
                    <br></br>
                    Points: {this.state.points}
                    <br></br>
                    Streak: {this.state.streak} 

                    <br></br>
                    Change password: 
                    <TextInput style = {styles.input}
                        secureTextEntry={true}
                        placeholder = "Password"
                        autoCapitalize = "none"
                        onChangeText = {this.SetTemp}
                    />
                    <TouchableOpacity
                        style = {styles.submitButton}
                        className = "button"
                        onPress = {
                            () => this.checkNewPass(this.state.temp)
                        }
                    >
                        <Text style = {styles.submitButtonText}> Change password </Text>
                    </TouchableOpacity>

                </div>
            </View>
        )
    }
}
export default Inputs

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 23,
        alignItems: 'center',
        justifyContent: 'center'
    },
    input: {
        margin: 15,
        height: 40,
        fontSize: 20,
        padding: 10,
        borderColor: '#4db8ff'
    },
    submitButton: {
        backgroundColor: '#4db8ff',
        padding: 10,
        margin: 15,
        fontSize: 20,
        height: 40,
        borderRadius: 7,
        padding: 8
    },
    submitButtonText: {
        backgroundColor: '#4db8ff',
        fontSize: 20,
        color: 'white'
    }
})

