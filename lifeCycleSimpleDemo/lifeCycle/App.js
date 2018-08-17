/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet, Text, View, Button
} from 'react-native';

export default class App extends Component {

  state = {
    name: ''
  }

  componentWillMount = () => {
    console.log("componentWillMount", this.state.name)
  }

  componentDidMount = () => {
    console.log("componentDidMount", this.state.name)
  }

  componentWillUpdate = () => {
    console.log("componentWillUpdate", this.state.name)
  }

  componentDidUpdate = () => {
    console.log("componentDidUpdate", this.state.name)
  }


  changename = () => {
    this.setState({ name: 'avon' })
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>Hello!</Text>
        {console.log("render裡面", this.state.name)}
        <Button
          title='Click'
          onPress={() => this.changename()}
        />

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },

});
