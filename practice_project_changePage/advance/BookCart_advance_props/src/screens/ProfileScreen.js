
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class ProfileScreen extends Component {

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>ProfileScreen!</Text>
                <Text style={styles.instructions}>profile頁面</Text>
                <Button
                    title="Go to Detail"
                    onPress={() => this.props.navigation.navigate('HomeDetail')}
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


