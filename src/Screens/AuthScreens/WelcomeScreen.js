import React from "react";
import { Text, View } from "react-native";
import styled from "styled-components/native";

import { Button } from "react-native-paper";

import { SafeArea } from "../../Components/Reusable/SafeArea";

export const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeArea>
      <HeaderText>Relations</HeaderText>
      <ButtonContainer>
        <StyledButton
          textColor="black"
          buttonColor="pink"
          mode="contained"
          onPress={() => navigation.navigate("SigninScreen")}
        >
          Sign In {""}
        </StyledButton>
        <StyledButton
          textColor="black"
          buttonColor="pink"
          mode="contained"
          onPress={() => navigation.navigate("SignupScreen")}
        >
          Sign Up
        </StyledButton>
      </ButtonContainer>
    </SafeArea>
  );
};

const HeaderText = styled(Text)`
  font-size: 24px;
  font-weight: 600;
  color: black;
  position: absolute;
  top: 10%;
  align-self: center;
  justify-self: center;
`;

const ButtonContainer = styled(View)`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const StyledButton = styled(Button).attrs({
  contentStyle: { width: "100%" },
  labelStyle: {
    fontWeight: "600",
    fontSize: 16,
  },
})`
  margin-top: 10px;
  border-radius: 10px;
`;
