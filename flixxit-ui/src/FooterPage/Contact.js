import React from "react";
import styled from "styled-components";
import Header from "../components/Header";

export default function Contact() {
  return (
    <Container>
      <Header />
      <div>
        <h1> CONTACT US</h1>
        <h3>
          <p> Email: info@flixxit.com</p>
          <h5>Phone: (+91) 7792-047282</h5>
          <h6>Address: 1234, 7th Main Street, Bangaluru, India</h6>
        </h3>
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: black;

  h1 {
    align-items: center;
    color: white;
    align-items: center;
    padding-left: 33.8rem;
    padding-top: 6rem;
    justify-content: center;
  }
  p {
    align-items: center;
    color: white;
    align-items: center;
    padding-left: 33.57rem;
  }
  h5 {
    align-items: center;
    color: white;
    align-items: center;
    padding-left: 34rem;
  }
  h6 {
    align-items: center;
    color: white;
    align-items: center;
    padding-left: 31rem;
    padding-bottom: 11rem;
  }
`;
