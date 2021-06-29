import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./movies.api";
import * as Types from "./movies.types";

export const getMovies = createAsyncThunk(
  `movies/getMovies`,
  async ({ page }: Types.GetMoviesRequest) => API.getMovies(page)
);

export const getMovieDetails = createAsyncThunk(
  `movies/getMovieDetails`,
  async ({ id }: Types.GetMovieDetailsRequest) => API.getMovieDetails(id)
);

export const getCreditsDetails = createAsyncThunk(
  `movies/getCreditsDetails`,
  async ({ id }: Types.GetMovieDetailsRequest) => API.getCreditsDetails(id)
);

export const getSimilarDetails = createAsyncThunk(
  `movies/getSimilarDetails`,
  async ({ id }: Types.GetMovieDetailsRequest) => API.getSimilarDetails(id)
);

export const getYtVideos = createAsyncThunk(
  `movies/getYtVideos`,
  async ({ id }: Types.GetMovieDetailsRequest) => API.getYtVideos(id)
);

export const getMovieImages = createAsyncThunk(
  `movies/getMovieImages`,
  async ({ id }: Types.GetMovieDetailsRequest) => API.getMovieImages(id)
);
