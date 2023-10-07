import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

export default function Thank() {
  return (
    <Container>
      <Header />
      <div>
        <h3>Thank you!</h3>
        <h4>For the feedback.</h4>
      </div>
    </Container>
  );
}

const Container = styled.div`
  justify-content: center;
  background-color: black;
  color: red;
  align-items: center;
  padding-bottom: 15rem;
  h3 {
    padding-top: 6.5rem;
    padding-left: 37rem;
  }
  h4 {
    padding-left: 36rem;
  }
`;
