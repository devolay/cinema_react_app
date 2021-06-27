import * as Types from "./movies.types";
import axios from "axios";
import { API_URL } from "shared/constants";

export const getMovies = (page: number) =>
  axios.get<Types.MoviesResult>(API_URL + page.toString()).then((x) => x.data);
