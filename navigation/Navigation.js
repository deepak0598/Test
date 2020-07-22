import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Users from "../screens/Users";
import Home from "../screens/Home";
const Stack = createStackNavigator();

function Navigation() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Users" component={Users} />
    </Stack.Navigator>
  );
}

export default Navigation;
