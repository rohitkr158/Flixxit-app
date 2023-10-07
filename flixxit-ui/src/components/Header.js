import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/Flixxit-logos_transparent.png";

const Header = (props) => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <div className="logo">
        <img src={logo} alt="Flixxit logo" />
      </div>
      <button onClick={() => navigate(props.login ? "/login" : "/signup")}>
        {props.login ? "Sign In" : "Sign Up"}
      </button>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* padding:  0 4rem; */
  margin-top: -4rem;

  .logo {
    img {
      height: 12rem;
      /* width: 12rem; */
      cursor: pointer;
    }
  }
  button {
    padding: 0.5rem 1rem;
    margin-right: 3rem;
    background-color: red;
    border: none;
    cursor: pointer;
    color: white;
    border-radius: 0.2rem;
    font-weight: bolder;
    font-size: 1.05rem;
  }
`;

export default Header;
