import RoomView from "components/RoomView";
import { SeatInfo } from "shared/types";
import * as SharedStyles from "shared/styles";
import { useState } from "react";
import Login from "components/Login";
import { ChakraProvider } from "@chakra-ui/react";

const STATIC_DATA: SeatInfo[] = [
  { id: 0, column: 1, row: 1, price: 14.99 },
  { id: 1, column: 2, row: 1, price: 14.99 },
  { id: 2, column: 3, row: 1, price: 14.99 },
  { id: 3, column: 4, row: 1, price: 14.99 },
  { id: 4, column: 5, row: 1, price: 14.99 },
  { id: 5, column: 6, row: 1, price: 14.99 },
  { id: 6, column: 1, row: 2, price: 14.99 },
  { id: 7, column: 2, row: 2, price: 14.99 },
  { id: 8, column: 3, row: 2, price: 14.99 },
  { id: 9, column: 4, row: 2, price: 14.99 },
  { id: 10, column: 5, row: 2, price: 14.99 },
  { id: 11, column: 6, row: 2, price: 14.99 },
  { id: 12, column: 1, row: 3, price: 14.99 },
  { id: 13, column: 2, row: 3, price: 14.99 },
  { id: 15, column: 3, row: 3, price: 14.99 },
  { id: 16, column: 4, row: 3, price: 14.99 },
  { id: 17, column: 5, row: 3, price: 14.99, userId: "0" },
  { id: 18, column: 6, row: 3, price: 14.99, userId: "1" },
  { id: 19, column: 1, row: 4, price: 14.99 },
  { id: 20, column: 2, row: 4, price: 14.99 },
  { id: 21, column: 3, row: 4, price: 14.99 },
  { id: 22, column: 4, row: 4, price: 14.99 },
  { id: 23, column: 5, row: 4, price: 14.99 },
  { id: 24, column: 6, row: 4, price: 14.99 },
  { id: 25, column: 1, row: 5, price: 14.99 },
];

function App() {
  const [seatsData, setSeatsData] = useState(STATIC_DATA);
  const [pageStatus, setPageStatus] = useState("login");

  if (pageStatus === "login") {
    return (
      <ChakraProvider>
        <SharedStyles.PageWraper>
          <Login onGuestClick={setPageStatus}></Login>
        </SharedStyles.PageWraper>
      </ChakraProvider>
    );
  } else {
    return (
      <ChakraProvider>
        <SharedStyles.PageWraper>
          <RoomView seatsData={seatsData} setSeatsData={setSeatsData} />
        </SharedStyles.PageWraper>
      </ChakraProvider>
    );
  }
}

export default App;
