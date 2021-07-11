import * as SharedTypes from "shared/types";
import { RootState } from "store";

export const selectCurrentDateMovieShowtimes =
  (date: Date, movie_id: string) =>
  ({ firestore: { data } }: RootState) =>
    !!data.showtimes &&
    Object.values(data.showtimes).filter((room) => {
      const specificRoom = room as unknown as SharedTypes.Showtime;
      const xd = specificRoom.date === date && specificRoom.movie_id === parseInt(movie_id);
      return xd;
    });

export const selectCurrentDateHourShowtimes =
  (date: Date, hour: string) =>
  ({ firestore: { data } }: RootState) =>
    !!data.showtimes &&
    (Object.values(data.showtimes)
      .find((room) => (room as unknown as SharedTypes.Showtime).date === date)
      ?.find(
        (room) => (room as unknown as SharedTypes.Showtime).hour === hour
      ) as unknown as SharedTypes.Showtime[]);
