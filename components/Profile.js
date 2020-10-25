import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Switch } from 'react-native';
import SwitchToggle from "react-native-switch-toggle";
import '../style.css';
import CheckBox from 'react-native-check-box'

//var int = '';



function Profile(username){
    return(
        <div>
            <h2>
                Username: {username}
                <br></br>
                Change password:
            </h2>
        </div>
    )
}

export default Profile;