import * as Types from "./RoomView.types";
import * as Styles from "./RoomView.styles";
import SeatItem from "components/SeatItem";
import { splitEvery } from "ramda";
import { SeatInfo, SeatInfoExtended } from "shared/types";
import { useRef, useState, useEffect } from "react";
import RoomBar from "components/RoomBar/RoomBar";
import ReservationForm from "components/ReservationForm";

const RoomView = ({ seatsData, setSeatsData }: Types.Props) => {
  const [selectedSeats, setSelectedSeats] = useState<SeatInfo[] & { notConfirmed?: boolean }>(
    seatsData
  );
  const [actualPrice, setActualPrice] = useState(0);
  const userId = useRef(3);

  const seatRows = splitEvery(6, selectedSeats);

  useEffect(() => {
    setActualPrice(() => calculatePrice(selectedSeats));
  }, [selectedSeats]);

  const calculatePrice = (selectedSeats: SeatInfoExtended[]) => {
    console.log(selectedSeats);
    const selected = selectedSeats.filter((seat) => seat.userId === userId.current.toString());
    console.log(selected);
    return selected.reduce((prev, cur) => prev + cur.price, 0);
  };

  const clickHandler = (selectedSeat: SeatInfo) => {
    if (userId.current.toString() === selectedSeat.userId || !selectedSeat.userId) {
      setSelectedSeats(
        selectedSeats.map((seat) =>
          seat.id === selectedSeat.id
            ? {
                ...selectedSeat,
                notConfirmed: seat.userId
                  ? seat.userId === userId.current.toString()
                    ? false
                    : true
                  : true,
                userId: seat.userId
                  ? seat.userId === userId.current.toString()
                    ? undefined
                    : userId.current.toString()
                  : userId.current.toString(),
              }
            : seat
        )
      );
    }
  };

  const confirmHandler = () => {
    const selectedSeatsMap = selectedSeats.map((seat) => ({ ...seat, notConfirmed: undefined }));
    setSeatsData(selectedSeatsMap);
    setSelectedSeats(selectedSeatsMap);
    setActualPrice(0);
    userId.current++;
  };

  const cancelHandler = () => {
    setSelectedSeats(seatsData);
    setActualPrice(0);
  };

  return (
    <Styles.Container>
      <RoomBar price={actualPrice} confirmHandler={confirmHandler} cancelHandler={cancelHandler} />
      <Styles.RoomContainer>
        <ReservationForm></ReservationForm>
        <Styles.Room>
          {seatRows.map((row) => (
            <Styles.Row key={row[0].id}>
              {row.map((seat) => (
                <SeatItem key={seat.id} seatInfo={seat} clickHandler={clickHandler} />
              ))}
            </Styles.Row>
          ))}
        </Styles.Room>
      </Styles.RoomContainer>
    </Styles.Container>
  );
};

export default RoomView;
