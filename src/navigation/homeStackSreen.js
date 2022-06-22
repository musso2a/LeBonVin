import React from 'react';
import Product from '../features/landing/product.screen';
import Home from '../features/landing/home';
import {createStackNavigator} from '@react-navigation/stack';

const homeStack = createStackNavigator();

const homeStackNavigator = () => {
  return (
    <homeStack.Navigator>
      <homeStack.Screen
        options={{headerShown: false}}
        name="Accueil"
        component={Home}
      />
      <homeStack.Screen name="Product" component={Product} />
    </homeStack.Navigator>
  );
};

export {homeStackNavigator};
