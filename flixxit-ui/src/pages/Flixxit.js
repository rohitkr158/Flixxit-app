import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { FaPlay } from "react-icons/fa";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import TopNav from "../components/TopNav";
// import Card from "../components/Card";
import { fetchMovies, getGenres } from "../store";
import avengers from "../assets/avengers-endgame.jpg.webp";
import SliderContainer from "../components/SliderContainer";

const Flixxit = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const movies = useSelector((state) => state.flixxit.movies);
  const genresLoaded = useSelector((state) => state.flixxit.genresLoaded);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "all" }));
    }
    // eslint-disable-next-line
  }, [genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <HeroContainer>
      <div className="hero">
        <TopNav isScrolled={isScrolled} />
        <img
          className="background-image"
          src={avengers}
          alt="avengers-endgame"
        />
        <div className="container">
          <div className="title">
            <h1>Avengers: Endgame (2019)</h1>
            <p>UA 04/26/2019 (IN) Adventure, Science Fiction, Action o 3h 1m</p>
          </div>
          <div className="buttons">
            <button onClick={() => navigate("/player")} className="playBtn">
              <FaPlay />
              Play
            </button>
            <button className="moreBtn">
              <AiOutlineInfoCircle />
              More
            </button>
          </div>
        </div>
      </div>
      {/* <Card /> */}
      <SliderContainer movies={movies} />
    </HeroContainer>
  );
};
const HeroContainer = styled.div`
  .hero {
    position: relative;
    .background-image {
      filter: brightness(70%);
    }
    img {
      height: 100vh;
      width: 100%;
    }
    .container {
      position: absolute;
      bottom: 0rem;
      .title {
        h1 {
          margin-left: 5rem;
          text-transform: uppercase;
          font-size: 30px;
          background: -webkit-linear-gradient(#eee, rgb(128, 13, 13));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          filter: brightness(200%);
        }
        p {
          margin-bottom: -50px;
          width: 640px;
          margin-left: 5rem;
          font-family: "lexend Deca", sans-serif;
          color: white;
        }
      }
      .buttons {
        display: flex;
        margin: 5rem;
        gap: 2rem;
      }
      .playBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: red;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: none;
        cursor: pointer;
      }
      .moreBtn {
        display: flex;
        align-items: center;
        justify-content: center;
        color: white;
        background-color: black;
        border-radius: 1rem;
        font-size: 1.4rem;
        gap: 1rem;
        padding: 0.9rem;
        padding-left: 2rem;
        padding-right: 2.4rem;
        border: 0.1rem solid white;
        cursor: pointer;
      }
    }
  }
`;

export default Flixxit;
