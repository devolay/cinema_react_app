import { SeatInfo } from "shared/types";

export interface Props {
  seatsData: SeatInfo[];
  setSeatsData: (value: React.SetStateAction<SeatInfo[]>) => void;
}
