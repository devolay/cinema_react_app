import * as Types from "./MovieCard.types";
import * as Styles from "./MovieCard.styles";
import { useState } from "react";
import { BASE_IMG_URL } from "shared/constants";
import { useHistory } from "react-router-dom";
import { Grow } from "@material-ui/core";

const MovieCard = ({ movie }: Types.Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();

  const goToDetails = () => {
    history.push(`/details/${movie.id}`);
  };

  return (
    <Styles.Container onClick={goToDetails}>
      <Grow timeout={500} in={isLoaded} disableStrictModeCompat>
        <Styles.Card elevation={4}>
          <Styles.Cover
            src={BASE_IMG_URL + movie.poster_path}
            alt="Film Cover"
            onLoad={() => setIsLoaded(true)}
          ></Styles.Cover>
          <Styles.Stars
            name={"rating" + movie.id}
            value={movie.vote_average / 2}
            precision={0.5}
            readOnly
          />
        </Styles.Card>
      </Grow>
    </Styles.Container>
  );
};

export default MovieCard;
