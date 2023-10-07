import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopNav from "../components/TopNav";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
import { useDispatch, useSelector } from "react-redux";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import { getUsersLikedMovies } from "../store";

export default function UserLiked() {
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.flixxit.movies);
  const navigate = useNavigate();
  const [email, setEmail] = useState(undefined);

  const dispatch = useDispatch();
  onAuthStateChanged(firebaseAuth, (currentUser) => {
    if (currentUser) setEmail(currentUser.email);
    else navigate("/login");
  });

  useEffect(() => {
    if (email) {
      dispatch(getUsersLikedMovies(email));
    }
    // eslint-disable-next-line
  }, [email]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  return (
    <Container>
      <TopNav isScrolled={isScrolled} />
      <div className="content flex column">
        <h1>Watch List</h1>
        <div className="grid flex">
          {movies &&
            movies.map((movie, index) => {
              return (
                <Card
                  movieData={movie}
                  index={index}
                  key={movie.id}
                  isLiked={true}
                />
              );
            })}
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  .content {
    margin: 2.3rem;
    margin-top: 8rem;
    gap: 3rem;
    h1 {
      margin-left: 3rem;
    }
    .grid {
      flex-wrap: wrap;
      gap: 1rem;
    }
  }
`;
