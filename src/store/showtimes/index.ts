import * as SharedTypes from "shared/types";
import { RootState } from "store";

export const selectCurrentDateShowtimes =
  (date: Date) =>
  ({ firestore: { data } }: RootState) =>
    !!data.showtimes &&
    (Object.values(data.showtimes).find(
      (room) => (room as unknown as SharedTypes.Showtime).date === date
    ) as unknown as SharedTypes.Showtime[]);

export const selectCurrentDateHourShowtimes =
  (date: Date, hour: string) =>
  ({ firestore: { data } }: RootState) =>
    !!data.showtimes &&
    (Object.values(data.showtimes)
      .find((room) => (room as unknown as SharedTypes.Showtime).date === date)
      ?.find(
        (room) => (room as unknown as SharedTypes.Showtime).hour === hour
      ) as unknown as SharedTypes.Showtime[]);
