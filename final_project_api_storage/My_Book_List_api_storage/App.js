/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';
import HomeScreen from './src/screens/HomeScreen';
import ProfileScreen from './src/screens/ProfileScreen';
import HomeDetailScreen from './src/screens/HomeDetailScreen'

const HomeStack = createStackNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: () => ({
      gesturesEnabled: false,
      title: 'Book Lists',
      headerBackTitle: '返回'
    }),
  },
  HomeDetail: { screen: HomeDetailScreen }
});

const ProfileStack = createStackNavigator({
  Profile: {
    screen: ProfileScreen,
    navigationOptions: () => ({
      gesturesEnabled: false,
      title: 'My favor',
      headerBackTitle: '返回'
    }),
  },
  // HomeDetail: { screen: HomeDetailScreen }
});

const App = createBottomTabNavigator(
  {
    Home: HomeStack,
    Profile: ProfileStack,
  },

  // add custom bottom tabs
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = 'ios-trophy'
        } else if (routeName === 'Profile') {
          iconName = 'ios-options'
        }
        return <Ionicons name={iconName} size={25} color={tintColor} />
      },
    }),
    tabBarOptions: {
      activeTintColor: 'tomato',
      inactiveTintColor: 'gray',
    },
  }
);

export default App
