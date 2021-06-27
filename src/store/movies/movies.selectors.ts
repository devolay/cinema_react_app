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
