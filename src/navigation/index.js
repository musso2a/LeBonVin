import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import MyTabs from '../features/onboarding/landing/components/NavigationBar';
import * as firebase from 'firebase/app';
import {firebaseConfig} from '../config/firebase';

export default class rootContainer extends React.Component {
  constructor() {
    super();
    this.initializeFirebase();
  }
  initializeFirebase = () => {
    firebase.initializeApp(firebaseConfig);
  };
  render() {
    return (
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    );
  }
}
