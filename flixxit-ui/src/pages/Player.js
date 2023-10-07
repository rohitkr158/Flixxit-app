import React from "react";
import styled from "styled-components";
import { BsArrowLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import avengersTrailer from "../assets/Avengers_ Age_of_Ultron-Trailer.mp4";

const Player = () => {
  const navigate = useNavigate();

  return (
    <PlayContainer>
      <div className="player">
        <div className="backArrow">
          <BsArrowLeft onClick={() => navigate(-1)} />
        </div>
        <video src={avengersTrailer} autoPlay loop controls />
      </div>
    </PlayContainer>
  );
};

const PlayContainer = styled.div`
  .player {
    width: 100vw;
    height: 100vh;
    .backArrow {
      position: absolute;
      padding: 2rem;
      z-index: 1;
      svg {
        font-size: 3rem;
        cursor: pointer;
        color: white;
      }
    }
    video {
      height: 100%;
      width: 100%;
    }
  }
`;

export default Player;
