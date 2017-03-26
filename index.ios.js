import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

import App from './components/App';
import { Examples } from '@shoutem/ui';

export default class lunchbox extends Component {
    render() {
        return (<App />);
    }
}

AppRegistry.registerComponent('lunchbox', () => lunchbox);
