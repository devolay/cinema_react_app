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
import { BASE_IMG_URL } from "shared/constants";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import YouTube, { Options } from "react-youtube";

const DetailsPage = ({}: Types.Props) => {
  const { id } = useParams<Types.DetailsParams>();
  const movieDetails = useSelector(services.selectors.movies.selectMovieDetails);
  const movieCredits = useSelector(services.selectors.movies.selectCreditsDetails);
  const similarMovies = useSelector(services.selectors.movies.selectSimilarMovies);
  const ytVideos = useSelector(services.selectors.movies.selectYtVideos);
  const [isLoaded, setIsLoaded] = useState(false);
  const dispatch = useDispatch<Dispatch>();

  useEffect(() => {
    dispatch(services.actions.movies.getMovieDetails({ id: id }));
    dispatch(services.actions.movies.getCreditsDetails({ id: id }));
    dispatch(services.actions.movies.getSimilarDetails({ id: id }));
    dispatch(services.actions.movies.getYtVideos({ id: id }));
  }, []);

  useEffect(() => {
    if (movieDetails !== null) {
      setIsLoaded(true);
    }
    console.log(movieDetails);
  }, [movieDetails]);

  const opts: Options = {
    height: "190",
    width: "300",
    playerVars: {
      autoplay: 1,
    },
  };

  return (
    <SharedStyles.Container>
      <RoomBar></RoomBar>
      <Grow timeout={300} in={true} disableStrictModeCompat>
        <Styles.Card>
          <Styles.Cover src={BASE_IMG_URL + movieDetails?.poster_path}></Styles.Cover>
          {/* <Styles.CarouselContainer> */}
          <AliceCarousel
            paddingLeft={25}
            controlsStrategy="alternate"
            responsive={{ 0: { items: 3 } }}
            items={ytVideos.map((video) => (
              <YouTube
                key={video.key}
                videoId={video.key}
                opts={opts}
                onReady={(event) => event.target.pauseVideo()}
              />
            ))}
          ></AliceCarousel>
          {/* </Styles.CarouselContainer> */}
        </Styles.Card>
      </Grow>
    </SharedStyles.Container>
  );
};

export default DetailsPage;
