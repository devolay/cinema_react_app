export interface SeatInfo {
  id: number;
  column: number;
  row: number;
  userId?: string;
}

export interface SeatInfoExtended {
  id: number;
  column: number;
  row: number;
  userId?: string;
  notConfirmed?: boolean;
}
