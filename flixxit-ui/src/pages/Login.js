import React, { useState } from "react";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import styled from "styled-components";
import { firebaseAuth } from "../utils/firebase-config";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      await signInWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Wrapper>
      <BackgroundImage />
      <div className="loginContent">
        <Header />
        <div className="form-wrapper">
          <div className="form">
            <div className="title">
              <h1>login</h1>
            </div>
            <div className="container">
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                onChange={(e) => setEmail(e.target.value)}
                value={email}
              />
              <input
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                value={password}
              />
              <button onClick={handleLogin}>Login</button>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  position: relative;
  .loginContent {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.6);
    text-align: center;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
  }
  .form-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    height: 70vh;
  }
  .form {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2rem;
    background-color: rgba(0, 0, 0, 0.85);
    height: 80vh;
    padding: 2rem;
    border-radius: 0.3rem;

    .container {
      display: flex;
      flex-direction: column;
      gap: 1rem;
      input {
        border-radius: 0.3rem;
        padding: 0.8rem;
        width: 25rem;
        height: 3rem;
        outline: none;
      }
      button {
        padding: 0.5rem;
        background-color: red;
        border: none;
        cursor: pointer;
        border-radius: 0.3rem;
        color: white;
        height: 3rem;
        font-weight: bolder;
        font-size: larger;
      }
    }
  }
`;

export default Login;
