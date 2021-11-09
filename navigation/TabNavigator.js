import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MainStackNavigator, ContactStackNavigator } from "./StackNavigator";
import Ionicons from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
  
              if (route.name === 'Home1') {
                iconName = focused
                  ? 'home'
                  : 'home-outline';
              } else if (route.name === 'Contact1') {
                iconName = focused ? 'map' : 'map-outline';
              }
  
              // You can return any component that you like here!
              return <Ionicons name={iconName} size={size} color={color} />;
            },
            tabBarActiveTintColor: '#9AC4F8',
            tabBarInactiveTintColor: 'gray',
            headerShown:false
          })}>
            <Tab.Screen name="Home1" component={MainStackNavigator} />
            <Tab.Screen name="Contact1" component={ContactStackNavigator} />
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;