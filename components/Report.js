import React, { Component } from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, Switch } from 'react-native';
import SwitchToggle from "react-native-switch-toggle";
import '../style.css';
import CheckBox from 'react-native-check-box'

//var int = '';

const Report = () => {
    return (
        <div>
            <h1>
                How are you feeling today?
            </h1>
            <p>
                Which of the following symptoms are you experiencing?
            </p>
            <br></br>
            <input type="checkbox" id="fev" value="0" className="sym"/>
            <label> Fever </label><br></br>
            <input type="checkbox" id="cou" value="1" className="sym"/>
            <label>Coughing </label><br></br>
            <input type="checkbox" id="sne" value="2" className="sym"/>
            <label>Sneezing</label><br></br>
            <input type="checkbox" id="fat" value="3" className="sym"/>
            <label>Fatigue</label><br></br>
            <input type="checkbox" id="sho" value="4" className="sym"/>
            <label>Shortness of breath</label><br></br>
            <input type="checkbox" id="che" value="5" className="sym"/>
            <label>Chest pain</label><br></br>
            <input type="checkbox" id="mus" value="6" className="sym"/>
            <label>Muscle aches</label><br></br>
            <input type="checkbox" id="sor" value="7" className="sym"/>
            <label>Sore throat</label><br></br>
            <input type="checkbox" id="sme" value="8" className="sym"/>
            <label>Loss of smell</label><br></br>


        </div>

    );
  }
  
/*
counter = () => {
    // temp is now a nodelist
    var temp = document.getElementByClassName("sym");
    for (var i = 0; i < temp.length; i++) {
        // if the item is checked, append 1 to the string
        // else, append a zero
        if (temp.item(i).checked) {
            int += '1';
        }
        else {
            int += '0';
        }

    }
}
*/
export default Report;