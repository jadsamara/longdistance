import { SafeAreaView, StatusBar } from "react-native";
import styled from "styled-components";

export const SafeArea = styled(SafeAreaView)`
  width: 100%;
  height: 100%;
  ${StatusBar.currentHeight && `margin-top: ${StatusBar.currentHeight}px`};
`;
