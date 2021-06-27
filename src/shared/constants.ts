const actualDateTime = Date.now();

export const API_URL = `https://api.themoviedb.org/3/discover/movie?api_key=250d122354ea771c8241d2810c5be94d&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&release_date.lte=${actualDateTime}&page=`;

export const BASE_IMG_URL = "http://image.tmdb.org/t/p/w185/";
