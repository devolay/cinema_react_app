import { RootState } from "store";
import * as SharedTypes from "shared/types";

export const selectRoomByNumber =
  (room_number: number) =>
  ({ firestore: { data } }: RootState) =>
    !!data.rooms &&
    (Object.values(data.rooms).find(
      (room) => (room as unknown as SharedTypes.Room).room_number === room_number
    ) as unknown as SharedTypes.Room);
