
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Button,
    TouchableHighlight
} from 'react-native';
import {
    createStackNavigator,
} from 'react-navigation';
import HomeMainScreen from './HomeMainScreen'
import HomeDetailScreen from './HomeDetailScreen'

const HomeScreen = createStackNavigator(
    {
        HomeMain: {
            screen: HomeMainScreen,
            navigationOptions: () => ({
                gesturesEnabled: false,
                title: '這是上方title',
                headerBackTitle: '返回'
            }),
        },
        HomeDetail: { screen: HomeDetailScreen },
    }
);

export default HomeScreen
