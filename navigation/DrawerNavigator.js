import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";

import { ContactStackNavigator } from "./StackNavigator";
import BottomTabNavigator from "./TabNavigator";

const Drawer = createDrawerNavigator();


const screenOptionStyle = {
    headerStyle: {
      backgroundColor: "#9AC4F8",
    },
    headerTintColor: "white",
    headerBackTitle: "Back",
  };

const DrawerNavigator = () => {
    return(
        <Drawer.Navigator screenOptions={screenOptionStyle}>
        <Drawer.Screen name="Home" component={BottomTabNavigator} />
        <Drawer.Screen name="Contact2" component={ContactStackNavigator} />
        </Drawer.Navigator>
    );
}

export default DrawerNavigator;