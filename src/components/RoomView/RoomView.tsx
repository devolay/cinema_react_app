import * as Types from "./RoomView.types";
import * as Styles from "./RoomView.styles";
import SeatItem from "components/SeatItem";
import { splitEvery } from "ramda";
import { SeatInfo } from "shared/types";
import { useRef, useState } from "react";
import RoomActions from "components/RoomActions";
import RoomInfo from "components/RoomInfo/RoomInfo";

const RoomView = ({ seatsData, setSeatsData }: Types.Props) => {
  const [selectedSeats, setSelectedSeats] =
    useState<SeatInfo[] & { notConfirmed?: boolean }>(seatsData);

  const userId = useRef(0);

  const seatRows = splitEvery(6, selectedSeats);

  const clickHandler = (seat: SeatInfo) => {
    if (userId.current.toString() === seat.userId || !seat.userId)
      setSelectedSeats((prevState) =>
        prevState.map((prevSeat) =>
          prevSeat.id === seat.id
            ? {
                ...seat,
                notConfirmed: true,
                userId: prevSeat.userId ? undefined : (userId.current++).toString(),
              }
            : prevSeat
        )
      );
  };

  const confirmHandler = () => {
    const selectedSeatsMap = selectedSeats.map((seat) => ({ ...seat, notConfirmed: undefined }));
    setSeatsData(selectedSeatsMap);
    setSelectedSeats(selectedSeatsMap);
  };

  const cancelHandler = () => {
    setSelectedSeats(seatsData);
  };

  return (
    <Styles.Container>
      <RoomInfo />
      <Styles.Room>
        {seatRows.map((row) => (
          <Styles.Row>
            {row.map((seat) => (
              <SeatItem key={seat.id} seatInfo={seat} clickHandler={clickHandler} />
            ))}
          </Styles.Row>
        ))}
      </Styles.Room>
      <RoomActions confirmHandler={confirmHandler} cancelHandler={cancelHandler} />
    </Styles.Container>
  );
};

export default RoomView;
