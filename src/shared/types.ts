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
}

export interface Film {
  id: string;
  cover: string;
  title: string;
  species: string;
}
