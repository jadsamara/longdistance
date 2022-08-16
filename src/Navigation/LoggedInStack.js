// Navigation for logged in users
import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { HomeScreen } from "../Screens/AppScreens/HomeScreen";

const Stack = createStackNavigator();

export const LoggedInStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="HomeScreen" component={HomeScreen} />
    </Stack.Navigator>
  );
};
