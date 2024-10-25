// Updated TabNavigator.js
import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AddPostScreen from '../Screens/AddPostScreen';
import ClubsScreen from '../Screens/ClubsScreen';
import FeedScreen from '../Screens/FeedScreen';
import MyBagScreen from '../Screens/MyBagScreen';
import ProfileScreen from '../Screens/ProfileScreen';
import SearchScreen from '../Screens/SearchScreen';
import SlamsScreen from '../Screens/SlamsScreen';
import { Ionicons } from '@expo/vector-icons';

// Create a bottom tab navigator instance
const Tab = createBottomTabNavigator();

// Define the TabNavigator component
const TabNavigator = () => {
  return (
    <Tab.Navigator initialRouteName="Feed" lazy={true}>
      <Tab.Screen 
        name="Feed" 
        component={FeedScreen} 
        options={{ 
          tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} />
        }} 
      />
      <Tab.Screen 
        name="Search" 
        component={SearchScreen} 
        options={{ 
          tabBarIcon: ({ color }) => <Ionicons name="list" size={24} color={color} />
        }} 
      />
      <Tab.Screen 
        name="MyBag" 
        component={MyBagScreen} 
        options={{ 
          tabBarIcon: ({ color }) => <Ionicons name="bag" size={24} color={color} />
        }} 
      />
      <Tab.Screen 
        name="AddPost" 
        component={AddPostScreen} 
        options={{ 
          tabBarIcon: ({ color }) => <Ionicons name="add" size={24} color={color} />,
          tabBarLabel: '+'
        }} 
      />
      <Tab.Screen 
        name="Clubs" 
        component={ClubsScreen} 
        options={{ 
          tabBarIcon: ({ color }) => <Ionicons name="people" size={24} color={color} />
        }} 
      />
      <Tab.Screen 
        name="Slams" 
        component={SlamsScreen} 
        options={{ 
          tabBarIcon: ({ color }) => <Ionicons name="star" size={24} color={color} />
        }} 
      />
      <Tab.Screen 
        name="Profile" 
        component={ProfileScreen} 
        options={{ 
          tabBarIcon: ({ color }) => <Ionicons name="person" size={24} color={color} />
        }} 
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
