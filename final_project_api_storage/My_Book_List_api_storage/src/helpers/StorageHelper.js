'use strict';

import { AsyncStorage } from 'react-native';

// 不一定要先寫好，但先寫好可以給開發者看
const settingKeys = [
    'name'
];

export let getMySetting = (key) => AsyncStorage.getItem(key);
export let setMySetting = (key, value) => AsyncStorage.setItem(key, value);
// export let removeMySetting = (key) => AsyncStorage.removeItem(key);