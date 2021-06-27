import * as Types from "./MovieCard.types";
import * as Styles from "./MovieCard.styles";
import { useState } from "react";
import { BASE_IMG_URL } from "shared/constants";
import Rating from "@material-ui/lab/Rating";
import { useHistory } from "react-router-dom";

const MovieCard = ({ movie }: Types.Props) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const history = useHistory();

  return (
    <Styles.Container>
      <Styles.Card elevation={4} onClick={history.push("/")}>
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
    </Styles.Container>
  );
};

export default MovieCard;
