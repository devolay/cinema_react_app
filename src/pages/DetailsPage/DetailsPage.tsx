import * as Types from "./DetailsPage.types";
import * as Styles from "./DetailsPage.styles";
import * as SharedStyles from "shared/styles";
import RoomBar from "components/RoomBar";
import { useParams } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import services from "store/services";
import { useEffect, useState } from "react";
import { Dispatch } from "store";
import { Grow } from "@material-ui/core";
import { BASE_POSTER_URL } from "shared/constants";
import "react-alice-carousel/lib/alice-carousel.css";
import ActorCard from "components/ActorCard";
import ReactPlayer from "react-player/youtube";
import MovieCard from "components/MovieCard";
import { useHistory } from "react-router-dom";

const DetailsPage = () => {
  const { id } = useParams<Types.DetailsParams>();
  const movieDetails = useSelector(services.selectors.movies.selectMovieDetails);
  const movieCredits = useSelector(services.selectors.movies.selectCreditsDetails);
  const similarMovies = useSelector(services.selectors.movies.selectSimilarMovies);
  const movieImages = useSelector(services.selectors.movies.selectMovieImages);
  const ytVideos = useSelector(services.selectors.movies.selectYtVideos);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch<Dispatch>();
  const history = useHistory();

  useEffect(() => {
    dispatch(services.actions.movies.getMovieDetails({ id: id }));
    dispatch(services.actions.movies.getCreditsDetails({ id: id }));
    dispatch(services.actions.movies.getSimilarDetails({ id: id }));
    dispatch(services.actions.movies.getYtVideos({ id: id }));
    dispatch(services.actions.movies.getMovieImages({ id: id }));
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [id]);

  useEffect(() => {
    if (movieDetails !== null) {
      setIsLoaded(true);
    }
    return () => {
      setIsLoaded(false);
    };
  }, [movieDetails]);

  const reserveTickets = () => {
    history.push(`/details/${id}/room`);
  };

  return (
    <SharedStyles.Container>
      <RoomBar></RoomBar>
      <Grow timeout={500} in={isLoaded} disableStrictModeCompat>
        <Styles.Card elevation={10}>
          <Styles.UpperContainer
            img_src={movieImages.length > 0 ? BASE_POSTER_URL + movieImages[0].file_path : ""}
          >
            <Styles.LeftContainer>
              <Styles.Info>
                <Styles.TitleHeader>{movieDetails?.title}</Styles.TitleHeader>
                <Styles.Stars
                  name={"rating" + movieDetails?.id}
                  value={movieDetails ? movieDetails.vote_average / 2 : 0}
                  precision={0.5}
                  readOnly
                ></Styles.Stars>
              </Styles.Info>
              <Styles.Info>
                <Styles.StyledText gutterBottom>{movieDetails?.overview}</Styles.StyledText>
              </Styles.Info>
              <Styles.Info>
                <Styles.StyledText>Release date</Styles.StyledText>
                <Styles.Bold>{movieDetails?.release_date}</Styles.Bold>
              </Styles.Info>
              <Styles.Info>
                <Styles.Bold>{movieDetails ? movieDetails?.runtime + " min" : ""}</Styles.Bold>
              </Styles.Info>
            </Styles.LeftContainer>
            <Styles.RightContainer>
              <Styles.ReservationButton variant="outlined" onClick={reserveTickets}>
                Buy Tickets
              </Styles.ReservationButton>
            </Styles.RightContainer>
          </Styles.UpperContainer>
          <Styles.LowerContainer>
            <Styles.CrouselHeader>Top billed cast</Styles.CrouselHeader>
            <Styles.StyledCarousel
              key={"actorsCarousel"}
              items={movieCredits?.cast.map((actor) => (
                <ActorCard key={actor.id} actor={actor}></ActorCard>
              ))}
              responsive={{ 0: { items: 8 } }}
              innerWidth={20}
              paddingLeft={10}
              controlsStrategy="responsive"
              animationType="fadeout"
              disableDotsControls={true}
              mouseTracking={true}
            ></Styles.StyledCarousel>
            <Styles.CrouselHeader>Videos</Styles.CrouselHeader>
            <Styles.StyledCarousel
              key={"videosCarousel"}
              controlsStrategy="responsive"
              responsive={{ 0: { items: 3 } }}
              disableDotsControls={true}
              paddingLeft={ytVideos?.length >= 3 ? 10 : ytVideos?.length === 2 ? 140 : 330}
              items={ytVideos.map((video) => (
                <ReactPlayer
                  key={video.id}
                  url={"https://www.youtube.com/watch?v=" + video.key}
                  controls={false}
                  light={true}
                  height={170}
                  width={303}
                ></ReactPlayer>
              ))}
            ></Styles.StyledCarousel>
            {similarMovies.length ? (
              <>
                <Styles.CrouselHeader>Similar movies</Styles.CrouselHeader>
                <Styles.StyledCarousel
                  key={"similarMoviesCarousel"}
                  items={similarMovies.map((movie) => (
                    <MovieCard key={movie.id} movie={movie}></MovieCard>
                  ))}
                  responsive={{ 0: { items: 4 } }}
                  controlsStrategy="responsive"
                  disableDotsControls={true}
                  mouseTracking={true}
                ></Styles.StyledCarousel>
              </>
            ) : (
              <></>
            )}
          </Styles.LowerContainer>
        </Styles.Card>
      </Grow>
    </SharedStyles.Container>
  );
};

export default DetailsPage;
