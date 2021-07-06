import * as Styles from "./RoomPage.styles";
import * as Types from "./RoomPage.types";
import * as SharedStyles from "shared/styles";
import SeatItem from "components/SeatItem";
import { splitEvery } from "ramda";
import { RoutesEnum, SeatInfo } from "shared/types";
import { useState, useEffect } from "react";
import RoomBar from "components/RoomBar/RoomBar";
import useCinemaContext from "./../../hooks/useCinemaContext";
import { useHistory, useParams } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import { GiCancel, GiConfirmed } from "react-icons/gi";
import PriceInfo from "components/PriceInfo";
import { Dispatch } from "store";
import { useDispatch, useSelector } from "react-redux";
import services from "store/services";
import { BASE_IMG_URL } from "shared/constants";
import { DatePicker } from "@material-ui/pickers";

const RoomPage = () => {
  const { id } = useParams<Types.DetailsParams>();
  const history = useHistory();
  const { seatsData, userId, setUserSelectedSeats, userSelectedSeats } = useCinemaContext();
  const [actualPrice, setActualPrice] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const seatRows = splitEvery(6, seatsData);
  const dispatch = useDispatch<Dispatch>();
  const movieDetails = useSelector(services.selectors.movies.selectMovieDetails);

  useEffect(() => {
    dispatch(services.actions.movies.getMovieDetails({ id: id }));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  useEffect(() => {
    setActualPrice(calculatePrice);
  }, [userSelectedSeats]);

  const handleDateChange = (date: any) => {
    setSelectedDate(date);
  };

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
          <Styles.Cover src={BASE_IMG_URL + movieDetails?.poster_path} alt="Film Cover" />
          <Styles.InfoContainer>
            <Styles.TitleHeader>{movieDetails?.title}</Styles.TitleHeader>
            <Styles.Info>
              <Styles.Bold>Release date </Styles.Bold>
              <Styles.StyledText>{movieDetails?.release_date}</Styles.StyledText>
            </Styles.Info>
            <Styles.Info>
              <Styles.Bold>Time </Styles.Bold>
              <Styles.StyledText>{movieDetails?.runtime + " min"}</Styles.StyledText>
            </Styles.Info>
            <Styles.Info>
              <Styles.Bold>Genre </Styles.Bold>
              <Styles.StyledText>{movieDetails?.genres[0].name}</Styles.StyledText>
            </Styles.Info>
          </Styles.InfoContainer>
        </Styles.LeftContainer>
        <Styles.RightContainer>
          <Styles.RightUpperContainer>
            <DatePicker
              label="Choose Date"
              value={selectedDate}
              onChange={handleDateChange}
              animateYearScrolling
            />
          </Styles.RightUpperContainer>
          <Styles.RoomContainer>
            <Styles.Room>
              <Styles.Screen>
                <Styles.ScreenTitle>Screen</Styles.ScreenTitle>
              </Styles.Screen>
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
