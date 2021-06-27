import * as MoviesThunks from "./movies/movies.thunks";
import * as MoviesSelectors from "./movies/movies.selectors";
import { moviesSlice } from "./movies/movies.slice";

const actions = { movies: { ...MoviesThunks, ...moviesSlice.actions } };

const selectors = { movies: { ...MoviesSelectors } };

const services = { actions, selectors };

export default services;
