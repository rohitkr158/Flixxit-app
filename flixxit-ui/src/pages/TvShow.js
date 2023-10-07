import React, { useEffect, useState } from "react";
import styled from "styled-components";
import TopNav from "../components/TopNav";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../utils/firebase-config";
// import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, getGenres } from "../store";
import SelectGenre from "../components/SelectGenre";
import SliderContainer from "../components/SliderContainer";
import NotAvailable from "../components/NotAvailable";

const TvShow = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const movies = useSelector((state) => state.flixxit.movies);
  const genres = useSelector((state) => state.flixxit.genres);
  const genresLoaded = useSelector((state) => state.flixxit.genresLoaded);

  // const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGenres());
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (genresLoaded) {
      dispatch(fetchMovies({ type: "tv" }));
    }
    // eslint-disable-next-line
  }, [genresLoaded]);

  window.onscroll = () => {
    setIsScrolled(window.pageYOffset === 0 ? false : true);
    return () => (window.onscroll = null);
  };

  onAuthStateChanged(firebaseAuth, (currentUser) => {
    // if (currentUser) navigate("/");
  });

  return (
    <Container>
      <div className="navbar">
        <TopNav isScrolled={isScrolled} />
      </div>
      <div className="data">
        <SelectGenre genres={genres} type="tv" />
        {movies&&movies.length ? <SliderContainer movies={movies} /> : <NotAvailable />}
      </div>
    </Container>
  );
};

const Container = styled.div`
  .data {
    margin-top: 8rem;
    .not-available {
      text-align: center;
      color: white;
      margin-top: 4rem;
    }
  }
`;

export default TvShow;
