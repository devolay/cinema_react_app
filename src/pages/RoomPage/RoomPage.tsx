import * as Styles from "./RoomPage.styles";
import * as SharedStyles from "shared/styles";
import SeatItem from "components/SeatItem";
import { splitEvery } from "ramda";
import { RoutesEnum, SeatInfo } from "shared/types";
import { useState, useEffect } from "react";
import RoomBar from "components/RoomBar/RoomBar";
import useCinemaContext from "./../../hooks/useCinemaContext";
import { useHistory } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { GiCancel, GiConfirmed } from "react-icons/gi";
import PriceInfo from "components/PriceInfo";
import { BASE_IMG_URL } from "shared/constants";

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
    <SharedStyles.Container>
      <RoomBar />
      <Styles.Card>
        <Styles.LeftContainer>
          <Styles.Cover
            src="https://image.tmdb.org/t/p/w500/bvYjhsbxOBwpm8xLE5BhdA3a8CZ.jpg"
            alt="Film Cover"
          />
          <Styles.TitleHeader>Avengers</Styles.TitleHeader>
          <Styles.Info>
            <Styles.Bold>Release date </Styles.Bold>
            <Styles.StyledText>cos tam</Styles.StyledText>
          </Styles.Info>
          <Styles.Info>
            <Styles.Bold>Time </Styles.Bold>
            <Styles.StyledText>120min</Styles.StyledText>
          </Styles.Info>
        </Styles.LeftContainer>
        <Styles.RightContainer>
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
              startIcon={<GiConfirmed />}
              color="primary"
              onClick={() => confirmHandler()}
            >
              Confirm
            </Styles.StyledButton>
            <Styles.StyledButton
              variant="contained"
              startIcon={<GiCancel />}
              color="primary"
              onClick={() => cancelHandler()}
            >
              Cancel
            </Styles.StyledButton>
          </Styles.CenterBottomContainer>
        </Styles.RightContainer>
      </Styles.Card>
      <Toaster />
    </SharedStyles.Container>
  );
};

export default RoomPage;
