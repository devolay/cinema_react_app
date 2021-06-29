import * as Types from "./movies.types";
import * as SharedTypes from "shared/types";
import axios from "axios";
import {
  API_URL_CREDITS,
  API_URL_MOVIES,
  API_URL_SIMILAR,
  API_URL_DETAILS,
  API_URL_VIDEOS,
  API_URL_IMAGES,
} from "shared/constants";

export const getMovies = (page: number) =>
  axios.get<Types.MoviesResult>(API_URL_MOVIES + page.toString()).then((x) => x.data);

export const getMovieDetails = (id: string) =>
  axios.get<SharedTypes.MovieDetails>(API_URL_DETAILS(id)).then((x) => x.data);

export const getCreditsDetails = (id: string) =>
  axios.get<SharedTypes.Credits>(API_URL_CREDITS(id)).then((x) => x.data);

export const getSimilarDetails = (id: string) =>
  axios.get<Types.MoviesResult>(API_URL_SIMILAR(id)).then((x) => x.data);

export const getYtVideos = (id: string) =>
  axios.get<Types.YtResult>(API_URL_VIDEOS(id)).then((x) => x.data);

export const getMovieImages = (id: string) =>
  axios.get<Types.ImageResult>(API_URL_IMAGES(id)).then((x) => x.data);
