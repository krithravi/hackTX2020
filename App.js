import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './style.css';

import Login from './components/Login'


var state = {
    token: ''
}


export default function App() {
    return (
        <View style={styles.container}>
        <Login />
        <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
