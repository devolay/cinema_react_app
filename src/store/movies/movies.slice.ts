import * as Types from "./movies.types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getMovies } from "./movies.thunks";

const initialState: Types.InitialState = {
  movies: [],
  pagesAmount: 0,
  currentPage: 1,
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
  },
});
