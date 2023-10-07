import React from "react";
import styled from "styled-components";
import background from "../assets/Sign in.webp";

export default function BackgroundImage() {
  return (
    <BackgroundContainer>
      <img src={background} alt="background" />
    </BackgroundContainer>
  );
}

const BackgroundContainer = styled.div`
  height: 100vh;
  width: 100vw;
  img {
    height: 100vh;
    width: 100vw;
  }
`;
