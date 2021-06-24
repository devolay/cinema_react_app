import * as Types from "./RoomBar.types";
import { Typography } from "@material-ui/core";
import * as Styles from "./RoomBar.styles";
import { RiAccountCircleFill } from "react-icons/ri";

const RoomBar = ({ confirmHandler }: Types.Props) => {
  return (
    <Styles.StyledAppBar position="static">
      <Styles.StyledToolbar>
        <Styles.LeftContainer>
          <Typography variant="h6">Cinema App</Typography>
          <Styles.BarButton color="inherit">Films</Styles.BarButton>
          <Styles.BarButton color="inherit" onClick={() => confirmHandler()}>
            Buy Tickets
          </Styles.BarButton>
        </Styles.LeftContainer>
        <Styles.BarButton color="inherit" startIcon={<RiAccountCircleFill />}>
          Login
        </Styles.BarButton>
      </Styles.StyledToolbar>
    </Styles.StyledAppBar>
  );
};

export default RoomBar;
