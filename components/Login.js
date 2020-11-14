// Ok so may god forbid this file contain
// ANYTHING other than login and registration
// and the corresponding authentication
// not *one more thing*
// RETURNS A TOKEN

import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Switch } from 'react-native';
import '../style.css';

const minLength = 4;

class Login extends Component {

    constructor(props) {
        super(props);
        this.handleLogin = this.handleLogin.bind(this);
    }

    state = {
        username: '',
        password: '',
        logOpt: '',
        token: ''
    }

    handleEntry=(e)=>{
        this.setState({
          logOpt: e.target.value
        })
        console.log(this.state.logOpt + " " + e.target.value);
    }

    isAlphaNumeric = (c) => {
        if (!(c > 47 && c < 58) &&
            !(c > 64 && c < 91) &&
            !(c > 96 && c < 123)) {
            return false;
        }
        return true;
    }

    validUserName = (s) => {
        if (s.length < minLength) {
            return false;
        }
        for (var i = 0; i < s.length; i++) {
            if (!this.isAlphaNumeric(s.charCodeAt(i))) {
                console.log("got here" + i);
                return false;
            }
        }
        return true;
    }

    validPassWord = (s) => {
        s += "";
        if (s.length < minLength) {
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

    async handleLogin (user, pass) {
        console.log(this.state.logOpt);
        if (this.validUserName(user) && this.validPassWord(pass)) {
            if (this.state.logOpt == "register") {
                var getPromise = await fetch("http://hacktx2020.southcentralus.cloudapp.azure.com:8080/api/register", {
                    method: "POST",
                    body: JSON.stringify({
                        username: user,
                        password: pass
                    }),
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                })

                var data = await getPromise.json();
                if (getPromise.status != 200) {
                    alert("Error, try again! :)");
                }
                else {
                    this.setState({
                        token: data["token"]
                      })
                    // TODO: take me to the next place!
                    alert("success");
                }
            }
            else if (this.state.logOpt == "login") {
                var getPromise = await fetch("http://hacktx2020.southcentralus.cloudapp.azure.com:8080/api/login", {
                    method: "POST",
                    body: JSON.stringify({
                        username: user,
                        password: pass
                    }),
                    headers: {
                        "Content-Type": "application/json; charset=UTF-8"
                    }
                })

                var data = await getPromise.json();
                if (getPromise.status != 200) {
                    alert("Error, try again! :)");
                }
                else {
                    this.setState({
                        token: data["token"]
                      })
                    // TODO: take me to the next place!
                    alert("success");
                }

            }
            else {
                alert("Must select an option");
            }
        }
        else {
            alert("Invalid credentials!");
        }

    }

    render() {
        return(
            <div>
                {/* Welcome! */}
                <h1>
                    Welcome!
                </h1>

                {/* Register or Login? */}

                <form>
                    <input
                        type="radio"
                        value="register"
                        id="register"
                        onChange={this.handleEntry}
                        name="logOpt"
                    />
                    <label>
                        Register!
                    </label>

                    <input
                        type="radio"
                        value="login"
                        id="login"
                        onChange={this.handleEntry}
                        name="logOpt"
                    />
                    <label>
                        Log in!
                    </label>
                </form>

                <br></br>
                <br></br>

                {/* Username */}
                <input
                    type="text"
                    id="username"
                    placeholder="Username"
                />
                <br></br>
                <br></br>
                {/* Password */}
                <input
                    type="password"
                    id="password"
                    placeholder="Password"
                />

                <br></br>
                <br></br>
                {/* Submit button! */}
                <button
                    type="submit"
                    className="button"
                    onClick={this.handleLogin}
                >
                Welcome!
                </button>

            </div>
        )
    }
}

export default Login;
