import * as Types from "./FilmsPage.types";
import * as Styles from "./FilmsPage.styles";
import * as SharedTypes from "shared/types";
import * as SharedStyles from "shared/styles";
import RoomBar from "components/RoomBar";
import FilmCard from "components/FilmCard";

export const image = "xd";

const testFilm: SharedTypes.Film = {
  id: "1",
  cover: image,
  title: "Mechanist",
  species: "fajny film",
};

const FilmsPage = ({}: Types.Props) => {
  return (
    <SharedStyles.Container>
      <RoomBar></RoomBar>
      <Styles.Cards>
        <FilmCard film={testFilm}></FilmCard>
      </Styles.Cards>
    </SharedStyles.Container>
  );
};

export default FilmsPage;
