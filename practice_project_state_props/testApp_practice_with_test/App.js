/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
  Button
} from 'react-native';
// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
//   android:
//     'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });
import MyButton from './src/components/MyButton';

export default class App extends Component {

  state = {
    name: '',
    validCode: '',
    clickButton: false
  }

  // function
  changeName = () => {
    // this.setState({ name: 'avon' })
    this.state.name === 'avon' ? this.setState({ name: '歡迎回來' }) : this.setState({ name: 'avon' })
  }

  getNumber = () => {

    // 法一：
    if (this.state.validCode === '1234') {
      return (
        <Text style={{ color: 'green' }}>輸入成功</Text>)
    } else {
      return (<Text style={{ color: 'orange' }}>請輸入密碼</Text>)
    }

    // 法二：
    // return (this.state.validCode === '1234' ? <Text style={{ color: 'green' }} > 輸入成功</Text > : <Text style={{ color: 'orange' }} > 請輸入密碼</Text >)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Welcome to React Native!</Text>
        <Text style={styles.instructions}>Hello! {this.state.name}</Text>
        {/* 法一: setState寫在button裡 */}
        <TouchableOpacity onPress={() => this.setState({ name: 'avon' })} style={{ borderColor: 'blue', borderWidth: 1, borderRadius: 5 }}>
          <Text>Click</Text>
        </TouchableOpacity>
        {/* 法一之二: 使用button元件 */}
        <Button
          title='Click Me'
          onPress={() => this.setState({ name: 'baby' })}
          color='red'
        />

        {/* 法二: setState寫在button內，用function包起來 */}
        <TouchableOpacity onPress={() => this.changeName()}>
          <Text>Click2</Text>
        </TouchableOpacity>

        {/* 輸入文字 */}
        <TextInput maxLength={4}
          style={{ height: 50, width: 300, borderRadius: 0, borderColor: 'darkgray', backgroundColor: 'white', fontSize: 28, textAlign: 'center' }}
          onChangeText={(text) => this.setState({ validCode: text })}
          autoFocus={true}
          secureTextEntry={true}
          placeholder="我的預設"
          keyboardType={"numeric"}
        />

        {/* 法一：輸入文字，即時判斷 */}
        {this.state.validCode === '1234' ? <Text style={{ color: 'blue' }}>輸入成功</Text> : <Text style={{ color: 'red' }}>請輸入密碼</Text>}

        {/* 法二：輸入文字，即時判斷，用function包起來 */}
        {this.getNumber()}

        {/* 自製元件：props練習*/}
        <MyButton title={'Next'} onPress={this.changeName} />
        <MyButton backgroundColor={'red'} color={'yellow'} title={'Next'} onPress={this.changeName} />

      </View >
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
