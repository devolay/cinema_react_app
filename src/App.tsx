import RoomView from "components/RoomView";
import { SeatInfo } from "shared/types";
import * as SharedStyles from "shared/styles";
import { useState } from "react";

const STATIC_DATA: SeatInfo[] = [
  { id: 0, column: 1, row: 1 },
  { id: 1, column: 2, row: 1 },
  { id: 2, column: 3, row: 1 },
  { id: 3, column: 4, row: 1 },
  { id: 4, column: 5, row: 1 },
  { id: 5, column: 6, row: 1 },
  { id: 6, column: 1, row: 2 },
  { id: 7, column: 2, row: 2 },
  { id: 8, column: 3, row: 2 },
  { id: 9, column: 4, row: 2 },
  { id: 10, column: 5, row: 2 },
  { id: 11, column: 6, row: 2 },
  { id: 12, column: 1, row: 3 },
  { id: 13, column: 2, row: 3 },
  { id: 15, column: 3, row: 3 },
  { id: 16, column: 4, row: 3 },
  { id: 17, column: 5, row: 3, userId: "0" },
  { id: 18, column: 6, row: 3, userId: "1" },
  { id: 19, column: 1, row: 4 },
  { id: 20, column: 2, row: 4 },
  { id: 21, column: 3, row: 4 },
  { id: 22, column: 4, row: 4 },
  { id: 23, column: 5, row: 4 },
  { id: 24, column: 6, row: 4 },
  { id: 25, column: 1, row: 5 },
];

function App() {
  const [seatsData, setSeatsData] = useState(STATIC_DATA);

  return (
    <SharedStyles.PageWraper>
      <RoomView seatsData={seatsData} setSeatsData={setSeatsData} />
    </SharedStyles.PageWraper>
  );
}

export default App;
