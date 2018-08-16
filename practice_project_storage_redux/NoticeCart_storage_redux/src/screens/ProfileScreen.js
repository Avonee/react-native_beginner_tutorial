
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TextInput
} from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper';

// for redux
import { connect } from 'react-redux'
import { addToCounter } from '../redux/action'

// export default class ProfileScreen extends Component {
class ProfileScreen extends Component {

    state = {
        name: ""
    }

    componentDidMount() {
        this.loadStorage();
    }

    // 讀取Storage內的資料
    loadStorage = async () => {
        let nameGet = await StorageHelper.getMySetting('name');

        if (nameGet) {
            this.setState({
                name: nameGet
            });
        }
    };

    // 存資料到Storage
    onPressButton = async () => {
        // post to server and change value to Storage
        try {
            await StorageHelper.setMySetting('name', this.state.name);
        } catch (err) {
            console.error(err);
        }

        // 跟後台串接範例
        // this.postUpdateUser()
    }

    // 跟後台串接範例
    // postUpdateUser = () => {
    //     var baseURL = ...
    //     var params = {
    //         "userId": this.state.userID,
    //         "displayName": this.state.name
    //     }
    //     const options = {
    //         method: 'POST',
    //         headers: {
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //         },
    //         body: (params ? JSON.stringify(params) : null),
    //     };

    //     fetch(baseURL, options)
    //         .then((response) => response.json())
    //         .then((responseData) => {
    //             console.log(responseData)
    //         })
    //         .catch(error => {
    //             console.log(error)
    //             Alert.alert('更新匿名發生錯誤')
    //         })
    //         .done()
    // }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>ProfileScreen!</Text>
                <Text style={styles.instructions}>ProfileScreen頁面!！！</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.navigate('Home')}
                />

                {/* 輸入文字 */}
                <TextInput maxLength={10}
                    style={{ height: 50, width: 300, borderRadius: 0, borderColor: 'darkgray', backgroundColor: 'white', fontSize: 28, textAlign: 'center' }}
                    onChangeText={(text) => this.setState({ name: text })}
                    value={this.state.name}
                />
                <Text style={styles.instructions}>hello {this.state.name}!</Text>
                <Button onPress={this.onPressButton} title='設定名字' />


                {/* 改成用redux來實作 */}
                <Text>{this.props.newName}</Text>
                {console.log(333, "在render內的his.props", this.props)}
                {/*  This.props.addToRedux() is a function to update the counter */}
                <Button onPress={() => this.props.addToCounter(this.state.name)} title='設定名字2' />

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

const mapStateToProps = (state) => {
    console.log(1111, state)
    return {
        newName: state.newName
    }
}

const mapDispatchToProps = (dispatch) => {

    return {

        // 法一
        // addToCounter: (name) => {
        //     dispatch({ type: 'ADD_TO_COUNTER', payload: { newName: name } })
        // }

        // 法二
        addToCounter: (name) => dispatch(addToCounter(name))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProfileScreen)

