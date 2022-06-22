import React from 'react';
import Product from '../features/landing/product.screen';
import Search from '../features/search/search';
import {createStackNavigator} from '@react-navigation/stack';

const searchStack = createStackNavigator();

const searchStackNavigator = () => {
  return (
    <searchStack.Navigator>
      <searchStack.Screen
        options={{headerShown: false}}
        name="Recherche"
        component={Search}
      />
      <searchStack.Screen name="Product" component={Product} />
    </searchStack.Navigator>
  );
};

export {searchStackNavigator};
