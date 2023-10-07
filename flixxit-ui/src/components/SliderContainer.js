import React from "react";
import styled from "styled-components";
import MovieSlider from "./MovieSlider";

const SliderContainer = ({ movies }) => {
  //selecting movies to display in a row

  const getMoviesBetween = (start, end) => {
    return movies && movies.slice(start, end);
  };

  return (
    <SliderWrapper>
      <MovieSlider data={getMoviesBetween(0, 10)} title="Only on Flixxit" />
      <MovieSlider
        data={getMoviesBetween(10, 20)}
        title="Top 10 Movies in India Today"
      />
      <MovieSlider data={getMoviesBetween(20, 30)} title="Trending Now" />
      <MovieSlider data={getMoviesBetween(30, 40)} title="New Releases" />
      <MovieSlider
        data={getMoviesBetween(40, 50)}
        title="Top 10 TV Shows in India Today"
      />
      <MovieSlider data={getMoviesBetween(50, 60)} title="Hindi Movies & TV" />
      <MovieSlider data={getMoviesBetween(60, 70)} title="Casual Viewing" />
      <MovieSlider data={getMoviesBetween(70, 80)} title="Top Searches" />
      {/* <MovieSlider data={getMoviesBetween(80, 90)} title="Watch It Again" />
      <MovieSlider data={getMoviesBetween(90, 100)} title="Exciting Movies" /> */}
    </SliderWrapper>
  );
};

const SliderWrapper = styled.div``;

export default SliderContainer;
