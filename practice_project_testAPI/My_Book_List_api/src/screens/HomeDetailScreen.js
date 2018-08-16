
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class HomeDetailScreen extends Component {

    render() {
        const passProps = this.props.navigation.getParam('passProps', 'some default value');
        return (
            <View style={styles.container}>
                <Image
                    source={{ uri: passProps.volumeInfo.imageLinks.thumbnail }}
                    style={styles.thumbnail} />
                <Text style={styles.welcome}>HomeDetailScreen!</Text>
                <Text style={styles.instructions}>HomeDetailScreen頁面!！！</Text>
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
    thumbnail: {
        width: 53,
        height: 81,
        marginRight: 10
    },
});


