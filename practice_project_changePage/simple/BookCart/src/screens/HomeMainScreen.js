
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';

export default class HomeMainScreen extends Component {

    toHomeDetail = () => {
        this.props.navigation.navigate('HomeDetail', {
            name: 'avon'

        })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>HomeMainScreen!</Text>
                <Text style={styles.instructions}>HomeMainScreen頁面!！！</Text>
                <Button
                    title="Go to HomeDetail"
                    // onPress={() => this.props.navigation.navigate('HomeDetail')}
                    onPress={() => this.toHomeDetail()}
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


