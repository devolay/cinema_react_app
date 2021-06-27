import { createAsyncThunk } from "@reduxjs/toolkit";
import * as API from "./movies.api";
import * as Types from "./movies.types";

export const getMovies = createAsyncThunk(
  `movies/getMovies`,
  async ({ page }: Types.GetMoviesRequest) => API.getMovies(page)
);
