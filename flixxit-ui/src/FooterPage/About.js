import React from "react";
import styled from "styled-components";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";

export default function About(props) {
  const navigate = useNavigate();

  return (
    <Container>
      <Header />
      <div>
        <p>
          <h2>What is Flixxit?</h2>
          <h4>
            Flixxit is a subscription-based streaming service that allows our
            members to watch TV shows and movies on an internet-connected
            device. Depending on your plan, you can also download TV shows and
            movies to your iOS, Android, or Windows 10 device and watch without
            an internet connection. If you're already a member and would like to
            learn more about using Flixxit, visit Getting started with Flixxit.
          </h4>
        </p>
      </div>
      <br />
      <br />
      <div>
        <p>
          <h2>TV Shows & Movies</h2>
          <h4>
            Flixxit content varies by region and may change over time. You can
            watch a variety of award-winning Flixxit originals, TV shows,
            movies, documentaries, and more. The more you watch, the better
            Flixxit gets at recommending TV shows and movies.
          </h4>
        </p>
      </div>
      <br />
      <br />
      <div>
        <p>
          <h2>Supported Devices</h2>
          <h4>
            You can watch Flixxit through any internet-connected device that
            offers the Flixxit app, including smart TVs, game consoles,
            streaming media players, set-top boxes, smartphones, and tablets.
            You can also watch Flixxit on your computer using an internet
            browser. You can review the system requirements for web browser
            compatibility, and check our internet speed recommendations to
            achieve the best performance. <br /> <br /> NOTE: A small percentage
            of devices may not be supported by all plans. Need help getting set
            up? Search our Help Center for the manufacturer of the device you're
            using. <br />
            <br />
            NOTE: The Flixxit app may come pre-loaded on certain devices, or you
            may need to download the Flixxit app onto your device. Flixxit app
            functionality may differ between devices.
          </h4>
        </p>
      </div>

      <br />
      <br />
      <div>
        <p>
          <h2>Plans and Pricing</h2>
          <h4>
            Each Flixxit plan determines the number of devices you can watch
            Flixxit on at the same time and whether you can watch in High
            Definition (HD), Full High Definition (FHD), or Ultra High
            Definition (UHD). You can change your plan or cancel online at any
            time.
          </h4>
        </p>
      </div>
      <br />
      <br />
      <div>
        <p>
          <h2>Get Started</h2>
          <h4>
            To start watching Flixxit: <br />
            1. Visit Flixxit.com/signup. <br />
            2. Choose a plan. <br />
            3. Create an account by entering your email address and creating a
            password. <br />
            4. Enter a payment method. <br />
            As a Flixxit member, you are charged once a month on the date you
            signed up. <br />
            <br />
            Was this article helpful?
            <br />
            <button onClick={() => navigate(props.login ? "/thank" : "/thank")}>
              Yes
            </button>
            <button onClick={() => navigate(props.login ? "/thank" : "/thank")}>
              No
            </button>
          </h4>
        </p>
      </div>
      <br />
    </Container>
  );
}

const Container = styled.div`
  background-color: black;
  color: white;
  padding-left: 5rem;
  padding-right: 3rem;
  padding-bottom: 3rem;
  div {
    h2 {
      color: red;
    }
  }
`;
