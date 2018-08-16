
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
} from 'react-native';
import {
    createStackNavigator,

} from 'react-navigation';

export default class HomeScreen extends Component {

    state = {
        food: ''
    }

    // 傳值到內頁
    toHomeDetail = () => {
        this.props.navigation.navigate('HomeDetail', {
            name: 'avon',
            function: arg => this.changeFood(arg)

        })
    }

    // 傳變數到此function
    changeFood = (foodGet) => {
        this.setState({ food: foodGet })
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>HomeScreen!</Text>
                <Text style={styles.instructions}>home頁面</Text>
                <Button
                    title="Go to Detail"
                    onPress={() => this.toHomeDetail()}
                />
                <Text style={styles.instructions}>{this.state.food}拿到了</Text>
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