import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Navigator
} from 'react-native';

const zenImage = require('../../assets/circle.png');

export default class StartScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={() => { this.props.onStartHandler() }}>
          <Image source={zenImage} style={styles.buttonImage} />
          <Text style={styles.readyText}>I'm ready to relax...</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#889dad',
  },
  readyText: {
      fontSize: 22,
      fontStyle: 'italic',
      marginTop: 20,
      color: '#ffffff'
  },
  button: {
    backgroundColor: '#889dad',
    borderRadius: 20,
    padding: 10,
    marginBottom: 20,
  },
  buttonImage: {
    width: 200,
    height: 200
  }
});
