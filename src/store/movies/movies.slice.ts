import * as Types from "./movies.types";
import * as SharedTypes from "shared/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {
  getMovies,
  getMovieDetails,
  getCreditsDetails,
  getSimilarDetails,
  getYtVideos,
  getMovieImages,
} from "./movies.thunks";

const initialState: Types.InitialState = {
  movies: [],
  pagesAmount: 0,
  currentPage: 1,
  movieDetails: null,
  movieCredits: null,
  ytvideos: [],
  similarMovies: [],
  backdrops: [],
};

export const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
  },
  extraReducers: {
    [getMovies.fulfilled.type]: (state, action: PayloadAction<Types.MoviesResult>) => {
      state.pagesAmount = action.payload.total_pages;
      state.movies = action.payload.results;
    },
    [getMovies.rejected.type]: (state) => {
      state.movies = [];
      state.pagesAmount = 1;
      state.currentPage = 1;
    },
    [getMovieDetails.fulfilled.type]: (state, action: PayloadAction<SharedTypes.MovieDetails>) => {
      state.movieDetails = action.payload;
      console.log(action.payload);
    },
    [getMovieDetails.rejected.type]: (state) => {
      state.movieDetails = null;
      console.log(state);
    },
    [getCreditsDetails.fulfilled.type]: (state, action: PayloadAction<SharedTypes.Credits>) => {
      state.movieCredits = action.payload;
    },
    [getCreditsDetails.rejected.type]: (state) => {
      state.movieCredits = null;
    },
    [getSimilarDetails.fulfilled.type]: (state, action: PayloadAction<Types.MoviesResult>) => {
      state.similarMovies = action.payload.results;
    },
    [getSimilarDetails.rejected.type]: (state) => {
      state.similarMovies = [];
    },
    [getYtVideos.fulfilled.type]: (state, action: PayloadAction<Types.YtResult>) => {
      state.ytvideos = action.payload.results;
    },
    [getYtVideos.rejected.type]: (state) => {
      state.ytvideos = [];
    },
    [getMovieImages.fulfilled.type]: (state, action: PayloadAction<Types.ImageResult>) => {
      state.backdrops = action.payload.backdrops;
    },
    [getMovieImages.rejected.type]: (state) => {
      state.backdrops = [];
    },
  },
});
