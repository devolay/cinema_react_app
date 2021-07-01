import * as Types from "./RoomBar.types";
import { Typography } from "@material-ui/core";
import * as Styles from "./RoomBar.styles";
import { RiAccountCircleFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { RoutesEnum } from "shared/types";

const RoomBar = ({}: Types.Props) => {
  const history = useHistory();

  return (
    <Styles.StyledAppBar position="static">
      <Styles.StyledToolbar>
        <Styles.LeftContainer>
          <Typography variant="h5">Cinemasio</Typography>
          <Styles.BarButton color="inherit" onClick={() => history.push(RoutesEnum.MoviesPage)}>
            Movies
          </Styles.BarButton>
        </Styles.LeftContainer>
        <Styles.BarButton
          color="inherit"
          onClick={() => history.push(RoutesEnum.LoginPage)}
          startIcon={<RiAccountCircleFill />}
        >
          Login
        </Styles.BarButton>
      </Styles.StyledToolbar>
    </Styles.StyledAppBar>
  );
};

export default RoomBar;
