export interface SeatInfo {
  id: number;
  column: number;
  row: number;
  userId?: string;
  price: number;
}

export enum RoutesEnum {
  FilmsPage = "/",
  ReservationFormPage = "/form",
  RoomPage = "/room",
  DetailsPage = "/details/:id",
}

export interface Movie {
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  genre_ids: number[];
  id: number;
  original_title: string;
  original_language: string;
  title: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}
