
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import * as StorageHelper from '../helpers/StorageHelper';

export default class ProfileScreen extends Component {

    state = {
        myBookCount: 0,
        myBookListName: []
    }

    componentWillMount() {
        this.props.navigation.addListener('didFocus', () => this.loadStorage())
        // this.loadStorage()
    }

    // 讀取Storage內的資料
    loadStorage = async () => {

        this.setState({ myBookListName: [] })

        let bookGet = await StorageHelper.getMySetting('code')
        let a = JSON.parse(bookGet)
        console.log("每次進來看我的array", this.state.myBookListName)
        let newArray = []
        a.forEach((thing) => {
            newArray.push(thing.volumeInfo.title)
            console.log(33333, thing.volumeInfo.title)
        })
        this.setState({ myBookCount: a.length, myBookListName: newArray })

    };

    render() {

        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>ProfileScreen!</Text>
                <Text style={styles.instructions}>profile頁面</Text>
                <Text style={styles.instructions}>我收藏了{this.state.myBookCount}本書</Text>
                {
                    this.state.myBookListName.map((bookName, index) => {
                        return (<Text key={index}>書名為：{bookName}</Text>)
                    })
                }

            </View>
        )
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


