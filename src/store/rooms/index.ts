import { RootState } from "store";
import * as SharedTypes from "shared/types";
import { createSelector } from "reselect";
import { get } from "lodash";

export const selectRoomByNumber =
  (room_number: number) =>
  ({ firestore: { data } }: RootState) =>
    !!data.rooms &&
    (Object.values(data.rooms).find(
      (room) => (room as unknown as SharedTypes.Room).room_number === room_number
    ) as unknown as SharedTypes.Room);

// export const selectRoomByNumber = (room_number: number) => {
//   return createSelector(
//     (state: RootState) => get(state, "firestore.data.rooms"),
//     (rooms: SharedTypes.Room[]) =>
//       !!rooms && rooms.filter((room: SharedTypes.Room) => room.room_number === room_number)
//   );
// };
