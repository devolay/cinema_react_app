import { Movie, Credits, MovieDetails, YtVideo } from "shared/types";
import { getCreditsDetails } from "./movies.api";

export interface MoviesResult {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Backdrop {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface Poster {
  aspect_ratio: number;
  file_path: string;
  height: number;
  iso_639_1: null | string;
  vote_average: number;
  vote_count: number;
  width: number;
}

export interface ImageResult {
  id: number;
  backdrops: Backdrop[];
  posters: Poster[];
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
  backdrops: Backdrop[];
}

export interface GetMoviesRequest {
  page: number;
}

export interface GetMovieDetailsRequest {
  id: string;
}
