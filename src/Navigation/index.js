// App wide navigation
import React, { useContext, useState, useEffect } from "react";
import { View } from "react-native";
import styled from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";

import { LoggedInStack } from "./LoggedInStack";
import { AuthStack } from "./AuthStack";

import { AuthenticatedUserContext } from "../Auth/Authentication";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Auth/Firebase";

import LottieView from "lottie-react-native";

export const RootNavigator = () => {
  const { user, setUser } = useContext(AuthenticatedUserContext);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(
      setInterval(() => {
        setIsLoading(false);
      }, 3300)
    );
  }, []);

  useEffect(() => {
    const unsubscribeAuth = onAuthStateChanged(
      auth,
      async (authenticatedUser) => {
        if (authenticatedUser) {
          setUser(authenticatedUser);
        } else {
          setUser(false);
        }
      }
    );
    return unsubscribeAuth;
  }, [setUser]);

  if (isLoading) {
    return (
      <Container>
        {/* <LottieContainer>
          <LottieView source={require("../../baby.json")} autoPlay />
        </LottieContainer> */}
      </Container>
    );
  }

  return (
    <NavigationContainer>
      {user ? <LoggedInStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

const Container = styled(View)`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const LottieContainer = styled(View)`
  height: 30%;
  width: 100%;
`;
