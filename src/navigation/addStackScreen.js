import React from 'react';
import Login from '../features/onboarding/login/login.screen';
import SignUp from '../features/onboarding/login/sign-up';
import Add from '../features/add/form';
import {createStackNavigator} from '@react-navigation/stack';

const addStack = createStackNavigator();

const addStackNavigator = () => {
  return (
    <addStack.Navigator>
      <addStack.Screen
        options={{headerShown: false}}
        name="Ajouter"
        component={Add}
      />
      <addStack.Screen name="Login" component={Login} />
      <addStack.Screen name="SignUp" component={SignUp} />
    </addStack.Navigator>
  );
};

export {addStackNavigator};
