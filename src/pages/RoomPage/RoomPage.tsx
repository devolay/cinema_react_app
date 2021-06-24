import * as Styles from "./RoomPage.styles";
import SeatItem from "components/SeatItem";
import { splitEvery } from "ramda";
import { RoutesEnum, SeatInfo, SeatInfoExtended } from "shared/types";
import { useRef, useState, useEffect } from "react";
import RoomBar from "components/RoomBar/RoomBar";
import useCinemaContext from "./../../hooks/useCinemaContext";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { GiCancel } from "react-icons/gi";
import PriceInfo from "components/PriceInfo";

const RoomPage = () => {
  const history = useHistory();
  const { seatsData, userId, setUserSelectedSeats, userSelectedSeats } = useCinemaContext();
  const [seatDataCopy, setSeatDataCopy] = useState<SeatInfo[]>(seatsData);
  const [selectedSeats, setSelectedSeats] = useState<SeatInfo[]>(userSelectedSeats);
  const [actualPrice, setActualPrice] = useState(0);
  const seatRows = splitEvery(6, seatDataCopy);

  useEffect(() => {
    setActualPrice(() => calculatePrice(selectedSeats));
  }, [selectedSeats]);

  const calculatePrice = (selectedSeats: SeatInfoExtended[]) => {
    const selected = selectedSeats.filter((seat) => seat.userId === userId.current.toString());
    return selected.reduce((prev, cur) => prev + cur.price, 0);
  };

  const clickHandler = (selectedSeat: SeatInfo) => {
    if (userId.current.toString() === selectedSeat.userId || !selectedSeat.userId) {
      setSelectedSeats((prevState) => ({ ...prevState, selectedSeat }));
      if (selectedSeats.includes(selectedSeat))
        setSelectedSeats((prevState) => prevState.filter((seat) => seat !== selectedSeat));
      else setSelectedSeats((prevState) => ({ ...prevState, selectedSeat }));
    }
  };

  const confirmHandler = () => {
    const selectedSeatsMap = selectedSeats.map((seat) => ({ ...seat, notConfirmed: undefined }));
    setUserSelectedSeats(selectedSeatsMap);
    setSelectedSeats(selectedSeatsMap);
    setActualPrice(0);
    noSeatInfoHandler();
  };

  const noSeatInfoHandler = () => {
    if (selectedSeats.filter((seat) => seat.userId === userId.current.toString()).length > 0) {
      history.push(RoutesEnum.ReservationFormPage);
      userId.current++;
    } else {
      toast.error("Please select seats before reservation!", { position: "bottom-center" });
    }
  };

  const cancelHandler = () => {
    setSelectedSeats(seatsData);
    setActualPrice(0);
    console.log(userId);
  };

  return (
    <Styles.Container>
      <RoomBar price={actualPrice} confirmHandler={confirmHandler} cancelHandler={cancelHandler} />
      <Styles.CenterContainer>
        <Styles.RoomContainer>
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
