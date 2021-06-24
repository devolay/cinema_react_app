import * as Types from "./RoomBar.types";
import { AppBar, Button, IconButton, Toolbar, Typography } from "@material-ui/core";
import * as Styles from "./RoomBar.styles";
import { RiAccountCircleFill } from "react-icons/ri";

const RoomBar = ({ price, confirmHandler, cancelHandler }: Types.Props) => {
  return (
    // <Styles.InfosContainer>
    //   <RoomActions confirmHandler={confirmHandler} cancelHandler={cancelHandler} />
    // </Styles.InfosContainer>
    // <PriceInfo price={price} />

    <Styles.StyledAppBar position="static">
      <Styles.StyledToolbar>
        <Styles.LeftContainer>
          <Typography variant="h6">Cinema App</Typography>
          <Styles.BarButton color="inherit">Films</Styles.BarButton>
          <Styles.BarButton color="inherit" onClick={() => confirmHandler()}>
            Buy Tickets
          </Styles.BarButton>
          <Styles.BarButton color="inherit" onClick={() => cancelHandler()}>
            Cancel
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
