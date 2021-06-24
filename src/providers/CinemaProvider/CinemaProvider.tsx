import { STATIC_DATA } from "api/mock";
import { useRef, useState } from "react";
import { createContext } from "react";
import { SeatInfo } from "shared/types";
import * as Types from "./CinemaProvider.types";

export const CinemaContext = createContext<Types.ICinemaContext | null>(null);

const CinemaProvider = ({ children }: Types.Props) => {
  const [seatsData, setSeatsData] = useState<SeatInfo[]>(STATIC_DATA);

  const userId = useRef(3);

  const [userSelectedSeats, setUserSelectedSeats] = useState<SeatInfo[]>([]);

  return (
    <CinemaContext.Provider
      value={{ seatsData, setSeatsData, userId, userSelectedSeats, setUserSelectedSeats }}
    >
      {children}
    </CinemaContext.Provider>
  );
};

export default CinemaProvider;
