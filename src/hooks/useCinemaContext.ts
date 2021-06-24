import { CinemaContext } from "providers/CinemaProvider/CinemaProvider";
import { ICinemaContext } from "providers/CinemaProvider/CinemaProvider.types";
import { useContext } from "react";

const useCinemaContext = () => {
  const context = useContext(CinemaContext) as ICinemaContext;

  if (context === undefined) {
    throw new Error("useCinemaContext must be used within a CinemaProvider");
  }

  return context;
};

export default useCinemaContext;
