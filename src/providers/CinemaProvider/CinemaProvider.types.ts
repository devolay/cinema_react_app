import React from "react";
import { SeatInfo } from "shared/types";

export interface Props {
  children: React.ReactNode;
}

export interface ICinemaContext {
  seatsData: SeatInfo[];
  setSeatsData: React.Dispatch<React.SetStateAction<SeatInfo[]>>;
}
