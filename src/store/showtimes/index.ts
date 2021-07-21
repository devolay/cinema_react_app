import * as SharedTypes from "shared/types";
import { RootState } from "store";
import firebase from "firebase/app";

export const selectCurrentDateMovieShowtimes =
  (date: firebase.firestore.Timestamp, movie_id: string) =>
  ({ firestore: { data } }: RootState) =>
    !!data.showtimes &&
    (Object.values(data.showtimes).filter((showtime) => {
      const specificShowtime = showtime as unknown as SharedTypes.Showtime;
      const xd =
        specificShowtime.date.seconds === date.seconds &&
        specificShowtime.movie_id === parseInt(movie_id);
      return xd;
    }) as unknown as SharedTypes.Showtime[]);
