import React from "react";

import { RootNavigator } from "./src/Navigation/index";
import { AuthenticatedUserProvider } from "./src/Auth/Authentication";

import { LogBox } from "react-native";

export default function App() {
  LogBox.ignoreAllLogs();
  return (
    <AuthenticatedUserProvider>
      <RootNavigator />
    </AuthenticatedUserProvider>
  );
}
