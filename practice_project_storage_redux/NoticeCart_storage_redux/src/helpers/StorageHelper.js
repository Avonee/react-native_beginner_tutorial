'use strict';

import { AsyncStorage } from 'react-native';

const settingKeys = [
    'name'
];

export let getMySetting = (key) => AsyncStorage.getItem(key);

export let setMySetting = (key, value) => AsyncStorage.setItem(key, value);