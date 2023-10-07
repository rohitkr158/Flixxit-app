import React, { useState } from "react";
import styled from "styled-components";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
} from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import Header from "../components/Header";
import BackgroundImage from "../components/BackgroundImage";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formValues, setFormValues] = useState({ email: "", password: "" });

  const navigate = useNavigate();

  const handleSignIn = async () => {
    try {
      const { email, password } = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
    } catch (error) {
      console.log(error);
    }
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) navigate("/");
  });

  return (
    <Container>
      <BackgroundImage />
      <div className="content">
        <Header login />
        <div className="body">
          <div className="text">
            <h1>Unlimited movies, Tv shows and more</h1>
            <h4>Watch Anywhere, Cancel Anytime.</h4>
            <h6>
              Ready to watch? <br />
              Enter your email to create or restart membership
            </h6>
          </div>
          <div className="form">
            {showPassword ? (
              <input
                type="password"
                placeholder="Password"
                name="password"
                value={formValues.password}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            ) : (
              <input
                type="email"
                placeholder="Email Address"
                name="email"
                value={formValues.email}
                onChange={(e) =>
                  setFormValues({
                    ...formValues,
                    [e.target.name]: e.target.value,
                  })
                }
              />
            )}

            {!showPassword ? (
              <button onClick={() => setShowPassword(true)}>Get Started</button>
            ) : (
              <button onClick={handleSignIn}>Sign Up</button>
            )}
          </div>
        </div>
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  .content {
    position: absolute;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.79);
    text-align: center;
    height: 100vh;
    width: 100vw;
    grid-template-columns: 15vh 85vh;
    .body {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    .text {
      display: flex;
      flex-direction: column;
      font-size: 1.5rem;
    }
    h1 {
      padding: 0 12rem;
      /* margin-top: 2rem; */
    }
    h4 {
      font-size: 1.4rem;
    }
    h6 {
      margin-top: 1.5rem;
      font-size: 1rem;
    }
  }
  .form {
    display: grid;
    width: 50%;
    margin-top: 2rem;
    grid-template-columns: ${({ showPassword }) =>
      showPassword ? "1fr 1fr" : "2fr 1fr"};
    justify-content: center;
    input {
      color: black;
      padding: 0.8rem;
      font-size: 1rem;
      border-radius: 0.3rem;
      /* width: 30rem; */
      &:focus {
        outline: none;
      }
    }
    button {
      margin-top: 0.1rem;
      color: white;
      background-color: red;
      border: none;
      border-radius: 0.2rem;
      font-weight: bolder;
      font-size: 1rem;
      padding: 1rem;
      width: 9rem;
    }
  }
`;

export default Signup;
