export interface SeatInfo {
  id: number;
  column: number;
  row: number;
  userId?: string;
  price: number;
}

export enum RoutesEnum {
  RoomPage = "/",
  ReservationFormPage = "/form",
}
