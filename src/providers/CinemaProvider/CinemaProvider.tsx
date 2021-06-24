import { STATIC_DATA } from "api/mock";
import { useState } from "react";
import { createContext } from "react";
import * as Types from "./CinemaProvider.types";

export const CinemaContext = createContext<Types.ICinemaContext | null>(null);

const CinemaProvider = ({ children }: Types.Props) => {
  const [seatsData, setSeatsData] = useState(STATIC_DATA);
  return (
    <CinemaContext.Provider value={{ seatsData, setSeatsData }}>{children}</CinemaContext.Provider>
  );
};

export default CinemaProvider;
