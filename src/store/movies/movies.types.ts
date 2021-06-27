import { Movie } from "shared/types";

export interface MoviesResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface InitialState {
  movies: Movie[];
  pagesAmount: number;
  currentPage: number;
}

export interface GetMoviesRequest {
  page: number;
}
