import React from 'react';
import Product from '../features/landing/product.screen';
import Login from '../features/onboarding/login/login.screen';
import SignUp from '../features/onboarding/login/sign-up';
import User from '../features/account/user';
import {createStackNavigator} from '@react-navigation/stack';

const userStack = createStackNavigator();

const userStackNavigator = () => {
  return (
    <userStack.Navigator>
      <userStack.Screen
        options={{headerShown: false}}
        name="Profil"
        component={User}
      />
      <userStack.Screen name="Product" component={Product} />
      <userStack.Screen name="Login" component={Login} />
      <userStack.Screen name="SignUp" component={SignUp} />
    </userStack.Navigator>
  );
};

export {userStackNavigator};
