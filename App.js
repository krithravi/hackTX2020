import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import './style.css';

import Inputs from './components/Inputs'

export default function App() {
  return (
      <View style={styles.container}>
        <h1>
          Welcome!
        </h1>

        <Inputs />
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
