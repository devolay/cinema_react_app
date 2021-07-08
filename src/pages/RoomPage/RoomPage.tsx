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
import { Grow, useMediaQuery } from "@material-ui/core";
import { useFirestore, useFirestoreConnect } from "react-redux-firebase";
import { selectRoomByNumber } from "store/rooms";
import { selectUser, selectUserProfileById } from "store/profiles";
import { firestoreConnect } from "react-redux-firebase";

const RoomPage = () => {
  const { id } = useParams<Types.DetailsParams>();
  const matches = useMediaQuery("(min-width:900px)");
  const history = useHistory();
  firestoreConnect(() => ["rooms"]); // sync todos collection from Firestore into redux
  const firestore = useFirestore();
  const room = useSelector(selectRoomByNumber(3));
  const { seatsData, userId, setUserSelectedSeats, userSelectedSeats } = useCinemaContext();
  const [actualPrice, setActualPrice] = useState(0);
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [isLoaded, setIsLoaded] = useState(false);

  const seatRows = splitEvery(
    Math.max.apply(
      Math,
      room.seats.map((o) => o.column)
    ),
    [room]
  );
  const dispatch = useDispatch<Dispatch>();
  const movieDetails = useSelector(services.selectors.movies.selectMovieDetails);

  useEffect(() => {
    if (movieDetails !== null) {
      setIsLoaded(true);
    }
  }, [movieDetails]);

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

  const randomHours = () => {
    const hours = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22];
    const mins = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55];
    const maxShowtimesCount = 8;
    const showtimeCount = Math.floor(Math.random() * maxShowtimesCount + 1);
    var showtimesArray = [];
    for (let i = 0; i < showtimeCount; i++) {
      let randomHour = hours[Math.floor(Math.random() * hours.length)];
      let randomMin = mins[Math.floor(Math.random() * mins.length)];
      showtimesArray.push(
        randomHour.toString() +
          ":" +
          (randomMin < 10 ? "0" + randomMin.toString() : randomMin.toString())
      );
    }
    return showtimesArray;
  };

  const randomRoomNumber = () => {
    return Math.floor(Math.random() * 20 + 1);
  };

  //ROOM GENERATOR
  // const generateRooms = () => {
  //   const minRows = 4;
  //   const maxRows = 12;
  //   const minSeatsInRow = 6;
  //   const maxSeatsInRow = 22;
  //   var seatsCount = [];
  //   var seatsInRowCountArray = [];
  //   for (let i = 0; i < 20; i++) {
  //     let rowsCount = Math.floor(Math.random() * (maxRows - minRows) + minRows);
  //     let seatsInRowCount = Math.floor(
  //       Math.random() * (maxSeatsInRow - minSeatsInRow) + minSeatsInRow
  //     );
  //     seatsInRowCountArray.push(seatsInRowCount);
  //     seatsCount.push(rowsCount * seatsInRowCount);
  //   }
  //   var rooms: SharedTypes.Room[] = [];
  //   for (let i = 0; i < 20; i++) {
  //     rooms.push({ room_number: i + 1, seats: [] });
  //     rooms[i].room_number = i + 1;
  //     var roomsArray: SeatInfo[] = [];
  //     for (let j = 0; j < seatsCount[i]; j++) {
  //       roomsArray.push({ id: j, column: (j % seatsInRowCountArray[i]) + 1, price: 13.99 });
  //     }
  //     rooms[i].seats = roomsArray;
  //   }
  //   rooms.map((room) => firestore.collection("rooms").add(room));
  // };

  return (
    <SharedStyles.Container>
      <RoomBar />
      <Grow timeout={500} in={isLoaded}>
        <Styles.Card>
          {matches && (
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
          )}
          <Styles.RightContainer>
            <Styles.RightUpperContainer>
              <DatePicker
                disablePast
                label="Choose Date"
                value={selectedDate}
                onChange={handleDateChange}
                animateYearScrolling
              />
              <Styles.HourContainer>
                <Styles.StyledButton onClick={}>18:00</Styles.StyledButton>
              </Styles.HourContainer>
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
      </Grow>
      <Toaster />
    </SharedStyles.Container>
  );
};

export default RoomPage;
