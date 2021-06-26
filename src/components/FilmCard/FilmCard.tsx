import * as Types from "./FilmCard.types";
import * as Styles from "./FilmCard.styles";
import { Grow } from "@material-ui/core";
import { useState } from "react";

const FilmCard = ({ film }: Types.Props) => {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <Styles.Container>
      <Styles.Card elevation={4}>
        <Styles.Cover
          src={film.cover}
          alt="Film Cover"
          onLoad={() => setIsLoaded(true)}
        ></Styles.Cover>
        <Styles.Title variant="h6">{film.title}</Styles.Title>
      </Styles.Card>
    </Styles.Container>
  );
};

export default FilmCard;
