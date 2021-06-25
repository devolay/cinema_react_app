import * as Styles from "./RoomPage.styles";
import SeatItem from "components/SeatItem";
import { splitEvery } from "ramda";
import { RoutesEnum, SeatInfo } from "shared/types";
import { useState, useEffect } from "react";
import RoomBar from "components/RoomBar/RoomBar";
import useCinemaContext from "./../../hooks/useCinemaContext";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { GiCancel } from "react-icons/gi";
import PriceInfo from "components/PriceInfo";

const RoomPage = () => {
  const history = useHistory();
  const { seatsData, userId, setUserSelectedSeats, userSelectedSeats } = useCinemaContext();
  const [actualPrice, setActualPrice] = useState(0);
  const seatRows = splitEvery(6, seatsData);

  useEffect(() => {
    setActualPrice(calculatePrice);
  }, [userSelectedSeats]);

  const calculatePrice = () => {
    return userSelectedSeats.reduce((prev, cur) => prev + cur.price, 0);
  };

  const clickHandler = (selectedSeat: SeatInfo) => {
    if (userId.current.toString() === selectedSeat.userId || !selectedSeat.userId) {
      if (userSelectedSeats.includes(selectedSeat))
        setUserSelectedSeats(userSelectedSeats.filter((seat) => seat !== selectedSeat));
      else setUserSelectedSeats([...userSelectedSeats, selectedSeat]);
    }
  };

  const confirmHandler = () => {
    if (userSelectedSeats.length > 0) {
      history.push(RoutesEnum.ReservationFormPage);
      userId.current++;
    } else {
      toast.error("Please select seats before reservation!", { position: "bottom-center" });
    }
  };

  const cancelHandler = () => {
    setUserSelectedSeats([]);
  };

  return (
    <Styles.Container>
      <RoomBar price={actualPrice} confirmHandler={confirmHandler} />
      <Styles.CenterContainer>
        <Styles.RoomContainer>
          <Styles.Room>
            {seatRows.map((row) => (
              <Styles.Row key={row[0].id}>
                {row.map((seat) => (
                  <SeatItem
                    key={seat.id}
                    seatInfo={seat}
                    clickHandler={() => clickHandler(seat)}
                    isChecked={userSelectedSeats.includes(seat)}
                  />
                ))}
              </Styles.Row>
            ))}
          </Styles.Room>
        </Styles.RoomContainer>
        <Styles.CenterBottomContainer>
          <PriceInfo price={actualPrice} />
          <Styles.StyledButton
            variant="contained"
            startIcon={<GiCancel />}
            color="primary"
            onClick={() => cancelHandler()}
          >
            Cancel
          </Styles.StyledButton>
        </Styles.CenterBottomContainer>
      </Styles.CenterContainer>
      <Toaster />
    </Styles.Container>
  );
};

export default RoomPage;
