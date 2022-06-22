/**
 * @format
 */

import {AppRegistry} from 'react-native';
//import App from './App';
import rootContainer from './src/navigation';
//import app from './src/core/app';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import Amplify from 'aws-amplify';
import awsconfig from './src/config/aws-exports';
Amplify.configure(awsconfig);

AppRegistry.registerComponent(appName, () => rootContainer);
