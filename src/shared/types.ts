export interface SeatInfo {
  id: number;
  column: number;
  row: number;
  userId?: string;
  price: number;
}

export interface SeatInfoExtended {
  id: number;
  column: number;
  row: number;
  userId?: string;
  notConfirmed?: boolean;
  price: number;
}
