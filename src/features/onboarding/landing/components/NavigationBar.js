import * as React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Chat from '../../../inbox/message';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import IonIcons from 'react-native-vector-icons/Ionicons';
import {homeStackNavigator} from '../../../../navigation/homeStackSreen';
import {searchStackNavigator} from '../../../../navigation/searchStackScreen';
import {userStackNavigator} from '../../../../navigation/accountStackScreen';
import {addStackNavigator} from '../../../../navigation/addStackScreen';

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({color, size}) => {
          const icons = {
            Home: 'home',
            Profile: 'account',
          };

          return (
            <MaterialCommunityIcons
              name={icons[route.name]}
              color={'#694BC0'}
              size={size}
            />
          );
        },
      })}>
      <Tab.Screen
        options={{headerShown: false}}
        name="Home"
        component={homeStackNavigator}
      />
      <Tab.Screen
        name="Search"
        component={searchStackNavigator}
        options={{
          tabBarLabel: 'Search',
          tabBarIcon: ({color, size}) => (
            <IonIcons name="ios-search" color={'#694BC0'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={addStackNavigator}
        options={{
          tabBarLabel: 'Add',
          tabBarIcon: ({color, size}) => (
            <IonIcons name="add-circle-sharp" color={'#694BC0'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarLabel: 'Chat',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons name="chat" color={'#694BC0'} size={size} />
          ),
        }}
      />
      <Tab.Screen
        name="User"
        component={userStackNavigator}
        options={{
          headerShown: false,
          tabBarLabel: 'Profile',
          tabBarIcon: ({color, size}) => (
            <MaterialCommunityIcons
              name="account"
              color={'#694BC0'}
              size={size}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
