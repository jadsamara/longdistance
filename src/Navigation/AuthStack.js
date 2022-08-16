// Navigation for un authenticated users
import React from "react";
import { Platform } from "react-native";
import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";

import { WelcomeScreen } from "../Screens/AuthScreens/WelcomeScreen";
import { SigninScreen } from "../Screens/AuthScreens/SigninScreen";
import { SignupScreen } from "../Screens/AuthScreens/SignupScreen";

const Stack = createStackNavigator();

const screenOptionsIos = () => {
  return {
    headerShown: false,
    ...TransitionPresets.ModalPresentationIOS,
    gestureResponseDistance: 150,
  };
};

const screenOptionsAndroid = () => {
  return {
    headerShown: false,
  };
};

export const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={
        Platform.OS === "ios" ? screenOptionsIos : screenOptionsAndroid
      }
      initialRouteName="WelcomeScreen"
    >
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="SignInScreen" component={SigninScreen} />
      <Stack.Screen name="SignUpScreen" component={SignupScreen} />
    </Stack.Navigator>
  );
};
