//index.js

import {
  configureStore,
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";
import axios from "axios";
import { MY_API_KEY, TMDB_BASE_URL } from "../utils/constant";

const initialState = {
  movies: [],
  genresLoaded: false,
  genres: [],
};

export const getGenres = createAsyncThunk("flixxit/genres", async () => {
  const {
    data: { genres },
  } = await axios.get(
    `${TMDB_BASE_URL}/genre/movie/list?api_key=${MY_API_KEY}`
  );
  // console.log(genres)
  return genres;
});

const arrayOfMovieData = (array, moviesArray, genres) => {
  // console.log(array)
  array.forEach((movie) => {
    const moviesGenres = [];
    movie.genre_ids.forEach((genre) => {
      const name = genres.find(({ id }) => id === genre);
      if (name) moviesGenres.push(name.name);
    });
    if (movie.backdrop_path)
      moviesArray.push({
        id: movie.id,
        name: movie?.original_name ? movie.original_name : movie.original_title,
        image: movie.backdrop_path,
        genres: moviesGenres.slice(0, 2),
      });
  });
};

const getMovieData = async (api, genres, paging = false) => {
  const moviesArray = [];
  for (let i = 1; moviesArray.length < 80 && i < 10; i++) {
    const {
      data: { results },
    } = await axios.get(`${api}${paging ? `&page=${i}` : ""}`);
    arrayOfMovieData(results, moviesArray, genres);
  }
  return moviesArray;
};

export const fetchDataByGenre = createAsyncThunk(
  "flixxit/moviesByGenres",
  async ({ genre, type }, myThunk) => {
    // console.log("in fetch data", genre, type);
    const {
      flixxit: { genres },
    } = myThunk.getState();
    return getMovieData(
      `${TMDB_BASE_URL}/discover/${type}?api_key=${MY_API_KEY}&with_genres=${genre}`,
      genres
    );
  }
);

export const fetchMovies = createAsyncThunk(
  "flixxit/trending",
  async ({ type }, myThunk) => {
    const {
      flixxit: { genres },
    } = myThunk.getState();
    return getMovieData(
      `${TMDB_BASE_URL}/trending/${type}/week?api_key=${MY_API_KEY}`,
      genres,
      true
    );
    // console.log(data)
  }
);

export const getUsersLikedMovies = createAsyncThunk(
  "flixxit/getLiked",
  async (email) => {
    const {
      data: { movies },
    } = await axios.get(`http://api/user/liked/${email}`);
    return movies;
  }
);

export const removeFromLikedMovies = createAsyncThunk(
  "netflix/deleteLiked",
  async ({ movieId, email }) => {
    const {
      data: { movies },
    } = await axios.put("http://api/user/remove", {
      email,
      movieId,
    });
    return movies;
  }
);

const FlixxitSlice = createSlice({
  name: "Flixxit",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getGenres.fulfilled, (state, action) => {
      state.genres = action.payload;
      state.genresLoaded = true;
    });
    builder.addCase(fetchMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(fetchDataByGenre.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(getUsersLikedMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
    builder.addCase(removeFromLikedMovies.fulfilled, (state, action) => {
      state.movies = action.payload;
    });
  },
});

export const store = configureStore({
  reducer: {
    flixxit: FlixxitSlice.reducer,
  },
});
