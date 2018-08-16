
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class HomeDetailScreen extends Component {

    render() {
        const name = this.props.navigation.getParam('name', 'some default value');
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>HomeDetailScreen!</Text>
                <Text style={styles.instructions}>HomeDetailScreen頁面!！！</Text>
                <Text>{name}</Text>

                {this.props.navigation.getParam('function') ?
                    <Button
                        title="Get Food"
                        onPress={() => this.props.navigation.getParam('function')('apple')}
                    /> : null}
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


