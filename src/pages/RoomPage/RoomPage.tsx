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
      setUserSelectedSeats((prevState) => ({ ...prevState, selectedSeat }));
      if (userSelectedSeats.includes(selectedSeat))
        setUserSelectedSeats((prevState) => prevState.filter((seat) => seat !== selectedSeat));
      else setUserSelectedSeats((prevState) => ({ ...prevState, selectedSeat }));
    }
  };

  const confirmHandler = () => {
    const selectedSeatsMap = userSelectedSeats.map((seat) => ({
      ...seat,
      notConfirmed: undefined,
    }));
    setUserSelectedSeats(selectedSeatsMap);
    setActualPrice(0);
    noSeatInfoHandler();
  };

  const noSeatInfoHandler = () => {
    if (userSelectedSeats.filter((seat) => seat.userId === userId.current.toString()).length > 0) {
      history.push(RoutesEnum.ReservationFormPage);
      userId.current++;
    } else {
      toast.error("Please select seats before reservation!", { position: "bottom-center" });
    }
  };

  const cancelHandler = () => {
    setUserSelectedSeats(seatsData);
    setActualPrice(0);
    console.log(userId);
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
