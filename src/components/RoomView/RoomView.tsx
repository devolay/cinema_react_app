import * as Types from "./RoomView.types";
import * as Styles from "./RoomView.styles";
import SeatItem from "components/SeatItem";
import * as SharedStyles from "shared/styles";
import { splitEvery } from "ramda";
import { SeatInfo } from "shared/types";

const RoomView = ({ seatsData, setSeatsData }: Types.Props) => {
  const seatRows = splitEvery(6, seatsData);

  const clickHandler = (seat: SeatInfo) => {
    console.log(":D");

    setSeatsData((prevState) =>
      prevState.map((prevSeat) =>
        prevSeat === seat ? { ...prevSeat, isBusy: !prevSeat.isBusy } : prevSeat
      )
    );
  };

  return (
    <Styles.Container>
      <Styles.Room>
        {seatRows.map((row) => (
          <Styles.Row>
            {row.map((seat) => (
              <SeatItem key={seat.id} seatInfo={seat} clickHandler={() => clickHandler(seat)} />
            ))}
          </Styles.Row>
        ))}
      </Styles.Room>
    </Styles.Container>
  );
};

export default RoomView;
