import * as Types from "./RoomBar.types";
import { MenuItem, Typography, Menu } from "@material-ui/core";
import * as Styles from "./RoomBar.styles";
import { RiAccountCircleFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { RoutesEnum } from "shared/types";
import { useSelector } from "react-redux";
import { logout, selectLoggedIn } from "store/profiles";
import { useState } from "react";

const RoomBar = ({}: Types.Props) => {
  const history = useHistory();
  const isLoggedIn = useSelector(selectLoggedIn);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleLogout = () => {
    logout();
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Styles.StyledAppBar position="static">
      <Styles.StyledToolbar>
        <Styles.LeftContainer>
          <Typography variant="h5">Cinemasio</Typography>
          <Styles.BarButton color="inherit" onClick={() => history.push(RoutesEnum.MoviesPage)}>
            Movies
          </Styles.BarButton>
        </Styles.LeftContainer>
        {isLoggedIn ? (
          <Styles.BarButton
            color="inherit"
            onClick={() => history.push(RoutesEnum.LoginPage)}
            startIcon={<RiAccountCircleFill />}
          >
            Login
          </Styles.BarButton>
        ) : (
          <div>
            <Styles.BarButton
              aria-controls="simple-menu"
              aria-haspopup="true"
              color="inherit"
              startIcon={<RiAccountCircleFill />}
              onClick={handleClick}
            >
              Profile
            </Styles.BarButton>
            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              keepMounted
              open={Boolean(anchorEl)}
              onClose={handleClose}
            >
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </div>
        )}
      </Styles.StyledToolbar>
    </Styles.StyledAppBar>
  );
};

export default RoomBar;
