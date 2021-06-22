import RoomView from "components/RoomView";
import { SeatInfo } from "shared/types";
import * as SharedStyles from "shared/styles";
import { useState } from "react";

const STATIC_DATA: SeatInfo[] = [
  { id: 0, column: 1, row: 1, isBusy: false },
  { id: 1, column: 2, row: 1, isBusy: false },
  { id: 2, column: 3, row: 1, isBusy: false },
  { id: 3, column: 4, row: 1, isBusy: false },
  { id: 4, column: 5, row: 1, isBusy: false },
  { id: 5, column: 6, row: 1, isBusy: false },
  { id: 6, column: 1, row: 2, isBusy: false },
  { id: 7, column: 2, row: 2, isBusy: false },
  { id: 8, column: 3, row: 2, isBusy: false },
  { id: 9, column: 4, row: 2, isBusy: false },
  { id: 10, column: 5, row: 2, isBusy: false },
  { id: 11, column: 6, row: 2, isBusy: false },
  { id: 12, column: 1, row: 3, isBusy: false },
  { id: 13, column: 2, row: 3, isBusy: false },
  { id: 15, column: 3, row: 3, isBusy: false },
  { id: 16, column: 4, row: 3, isBusy: false },
  { id: 17, column: 5, row: 3, isBusy: false },
  { id: 18, column: 6, row: 3, isBusy: false },
  { id: 19, column: 1, row: 4, isBusy: false },
  { id: 20, column: 2, row: 4, isBusy: false },
  { id: 21, column: 3, row: 4, isBusy: false },
  { id: 22, column: 4, row: 4, isBusy: false },
  { id: 23, column: 5, row: 4, isBusy: false },
  { id: 24, column: 6, row: 4, isBusy: false },
  { id: 25, column: 1, row: 5, isBusy: false },
];

function App() {
  const [seatsData, setSeatsData] = useState(STATIC_DATA);

  return (
    <SharedStyles.PageWraper>
      <RoomView seatsData={seatsData} setSeatsData={(value) => setSeatsData(value)} />
    </SharedStyles.PageWraper>
  );
}

export default App;
