const actualDateTime = Date.now();

export const API_URL_MOVIES = `https://api.themoviedb.org/3/discover/movie?api_key=250d122354ea771c8241d2810c5be94d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&release_date.lte=${actualDateTime}&page=`;

export const BASE_IMG_URL = "http://image.tmdb.org/t/p/w185/";

export const API_URL_DETAILS = (movie_id: string) =>
  `https://api.themoviedb.org/3/movie/${movie_id}?api_key=250d122354ea771c8241d2810c5be94d&language=en-US`;

export const API_URL_CREDITS = (movie_id: string) =>
  `https://api.themoviedb.org/3/movie/${movie_id}/credits?api_key=250d122354ea771c8241d2810c5be94d&language=en-US`;

export const API_URL_SIMILAR = (movie_id: string) =>
  `https://api.themoviedb.org/3/movie/${movie_id}/similar?api_key=250d122354ea771c8241d2810c5be94d&language=en-US`;

export const API_URL_VIDEOS = (movie_id: string) =>
  `https://api.themoviedb.org/3/movie/${movie_id}/videos?api_key=250d122354ea771c8241d2810c5be94d&language=en-US`;

export const API_URL_IMAGES = (movie_id: string) =>
  `https://api.themoviedb.org/3/movie/${movie_id}/images?api_key=250d122354ea771c8241d2810c5be94d`;

export const YOUTUBE_URL = "https://www.youtube.com/watch?v=";

export const BASE_POSTER_URL = "https://image.tmdb.org/t/p/original/";
