/** @format */
import React from 'react'
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

// for redux
import { Provider } from 'react-redux'
import configureStore from './src/redux/store'
const store = configureStore()

const MyApp = () => (
    <Provider store={store}>
        <App />
    </Provider>
)

// AppRegistry.registerComponent(appName, () => App);
AppRegistry.registerComponent(appName, () => MyApp)
