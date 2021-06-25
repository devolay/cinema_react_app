import { SeatInfo } from "shared/types";

export interface Props {
  seatInfo: SeatInfo;
  clickHandler: () => void;
  isChecked: boolean;
}
