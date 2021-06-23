import * as Types from "./RoomView.types";
import * as Styles from "./RoomView.styles";
import SeatItem from "components/SeatItem";
import { splitEvery } from "ramda";
import { SeatInfo, SeatInfoExtended } from "shared/types";
import { useRef, useState } from "react";
import RoomBar from "components/RoomBar/RoomBar";
import ReservationForm from "components/ReservationForm";

const RoomView = ({ seatsData, setSeatsData }: Types.Props) => {
  const [selectedSeats, setSelectedSeats] = useState<SeatInfo[] & { notConfirmed?: boolean }>(
    seatsData
  );

  const [actualPrice, setActualPrice] = useState(0);

  const userId = useRef(3);

  const seatRows = splitEvery(6, selectedSeats);

  const calculatePrice = (selectedSeats: SeatInfoExtended[]) => {
    const selected = selectedSeats.filter((seat) => seat.userId === userId.current.toString());
    return selected.reduce((prev, cur) => {
      return prev + cur.price;
    }, 0);
  };

  const clickHandler = (seat: SeatInfo) => {
    if (userId.current.toString() === seat.userId || !seat.userId) {
      setSelectedSeats((prevState) =>
        prevState.map((prevSeat) =>
          prevSeat.id === seat.id
            ? {
                ...seat,
                notConfirmed: prevSeat.userId
                  ? prevSeat.userId === userId.current.toString()
                    ? false
                    : true
                  : true,
                userId: prevSeat.userId
                  ? prevSeat.userId === userId.current.toString()
                    ? undefined
                    : userId.current.toString()
                  : userId.current.toString(),
              }
            : prevSeat
        )
      );
      setActualPrice(() => calculatePrice(selectedSeats));
      console.log();
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
            <Styles.Row>
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
