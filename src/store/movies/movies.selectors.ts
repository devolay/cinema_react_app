import { RootState } from "store";

export const selectPagesAmount = (store: RootState) => {
  return store.movies.pagesAmount;
};

export const selectCurrentPage = (store: RootState) => {
  return store.movies.currentPage;
};

export const selectMovies = (store: RootState) => {
  return store.movies.movies;
};

export const selectMovieDetails = (store: RootState) => {
  return store.movies.movieDetails;
};

export const selectCreditsDetails = (store: RootState) => {
  return store.movies.movieCredits;
};

export const selectSimilarMovies = (store: RootState) => {
  return store.movies.similarMovies;
};

export const selectYtVideos = (store: RootState) => {
  return store.movies.ytvideos;
};

export const selectMovieImages = (store: RootState) => {
  return store.movies.backdrops;
};
