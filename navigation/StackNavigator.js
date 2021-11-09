import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import About from "../screens/UploadPresc";
import Home from '../screens/Home';
import UploadPresc from "../screens/UploadPresc";
import Maps from './../screens/Map';
import Feedback from "../screens/Feedback";
import TakePicture from './../screens/TakePicture';
import PharmacyList from './../screens/PharmacyList';


const Stack = createStackNavigator();

const screenOptionStyle = {
  headerStyle: {
    backgroundColor: "#9AC4F8",
  },
  headerTintColor: "white",
  headerBackTitle: "Back",
};

const MainStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Upload Prescription" component={UploadPresc} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="TakePicture" component={TakePicture} />
      <Stack.Screen name="PharmacyList" component={PharmacyList} />
    </Stack.Navigator>
  );
};


export { MainStackNavigator };
