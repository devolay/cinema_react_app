import { Movie, Credits, MovieDetails, YtVideo } from "shared/types";
import { getCreditsDetails } from "./movies.api";

export interface MoviesResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface YtResult {
  id: number;
  results: YtVideo[];
}

export interface InitialState {
  movies: Movie[];
  pagesAmount: number;
  currentPage: number;
  movieDetails: MovieDetails | null;
  movieCredits: Credits | null;
  ytvideos: YtVideo[];
  similarMovies: Movie[];
}

export interface GetMoviesRequest {
  page: number;
}

export interface GetMovieDetailsRequest {
  id: string;
}
