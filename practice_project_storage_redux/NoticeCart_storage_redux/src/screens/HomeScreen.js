
import React, { Component } from 'react';
import {
    Text,
    View,
    StyleSheet
} from 'react-native';

class HomeScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>HomeScreen</Text>
                <Text style={styles.instructions}>HomeScreen頁面</Text>
            </View>
        )
    }

}
export default HomeScreen

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
