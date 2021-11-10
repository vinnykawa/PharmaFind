import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


import About from "../screens/UploadPresc";
import Home from '../screens/Home';
import UploadPresc from "../screens/UploadPresc";
import Maps from './../screens/Map';
import Feedback from "../screens/Feedback";
import TakePicture from './../screens/TakePicture';
import PharmacyList from './../screens/PharmacyList';
import WelcomeScreen from './../screens/WelcomeScreen';
import Register from './../screens/Register';
import UploadMed from './../screens/UploadMed';


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
    <Stack.Navigator screenOptions={screenOptionStyle} initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={WelcomeScreen} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Upload Prescription" component={UploadPresc} />
      <Stack.Screen name="Feedback" component={Feedback} />
      <Stack.Screen name="TakePicture" component={TakePicture} />
      <Stack.Screen name="PharmacyList" component={PharmacyList} />
      <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="Upload Medication" component={UploadMed} />
    </Stack.Navigator>
  );
};


export { MainStackNavigator };
