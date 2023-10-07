import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { AiOutlineSearch } from "react-icons/ai";

export default function HelpCenter() {
  return (
    <Container>
      <Header />
      <div>
        <h1>How can we help?</h1>
        <input type="text" placeholder="Type a question, topic or issue" />
        <AiOutlineSearch />
      </div>
      <div className="popular-topics">
        <a href="/howtosignup">How to sign up for Flixxit </a>
        <br />
        <a href="/">Plans and Pricing </a>
        <br />
        <a href="/">Can't sign in to Flixxit </a>
        <br />
      </div>
    </Container>
  );
}

const Container = styled.div`
  background-color: white;
  padding-bottom: 18rem;
  h1 {
    color: black;
    padding-left: 32rem;
  }
  input {
    align-items: center;
    padding-left: 32rem;
    margin-left: 24rem;
    width: 5rem;
    color: black;
  }
  .popular-topics {
    align-items: center;
    padding-left: 11rem;
    margin-left: 24rem;
    padding-top: 1rem;
    color: black;
  }
`;
