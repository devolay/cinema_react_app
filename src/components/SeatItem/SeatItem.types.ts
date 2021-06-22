import { SeatInfo, SeatInfoExtended } from "shared/types";

export interface Props {
  seatInfo: SeatInfoExtended;
  clickHandler: (seat: SeatInfo) => void;
}
