import {
  MenuItem,
  Typography,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
  MenuList,
} from "@material-ui/core";
import * as Styles from "./RoomBar.styles";
import { RiAccountCircleFill } from "react-icons/ri";
import { useHistory } from "react-router-dom";
import { RoutesEnum } from "shared/types";
import { useSelector } from "react-redux";
import { logout, selectLoggedIn } from "store/profiles";
import { useState, useRef, useEffect } from "react";

const RoomBar = () => {
  const history = useHistory();
  const isLoggedIn = useSelector(selectLoggedIn);
  const anchorRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event: React.MouseEvent<EventTarget>) => {
    if (anchorRef.current && anchorRef.current.contains(event.target as HTMLElement)) {
      return;
    }
    setOpen(false);
  };

  const handleLogout = () => {
    logout();
  };

  function handleListKeyDown(event: React.KeyboardEvent) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = useRef(open);
  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus();
    }
    prevOpen.current = open;
  }, [open]);

  return (
    <Styles.StyledAppBar position="static">
      <Styles.StyledToolbar>
        <Styles.LeftContainer>
          <Typography variant="h5">Cinemasio</Typography>
          <Styles.BarButton color="inherit" onClick={() => history.push(RoutesEnum.MoviesPage)}>
            Movies
          </Styles.BarButton>
        </Styles.LeftContainer>
        {!isLoggedIn ? (
          <Styles.BarButton
            color="inherit"
            onClick={() => history.push(RoutesEnum.LoginForm)}
            startIcon={<RiAccountCircleFill />}
          >
            Login
          </Styles.BarButton>
        ) : (
          <div>
            <Styles.BarButton
              aria-controls={open ? "menu-list-grow" : undefined}
              ref={anchorRef}
              aria-haspopup="true"
              color="inherit"
              startIcon={<RiAccountCircleFill />}
              onClick={handleClick}
            >
              Profile
            </Styles.BarButton>
            <Popper
              open={open}
              anchorEl={anchorRef.current}
              role={undefined}
              transition
              disablePortal
            >
              {({ TransitionProps, placement }) => (
                <Grow
                  {...TransitionProps}
                  style={{
                    transformOrigin: placement === "bottom" ? "center top" : "center bottom",
                  }}
                >
                  <Paper>
                    <ClickAwayListener onClickAway={handleClose}>
                      <MenuList
                        autoFocusItem={open}
                        id="menu-list-grow"
                        onKeyDown={handleListKeyDown}
                      >
                        <MenuItem onClick={handleClose}>My account</MenuItem>
                        <MenuItem onClick={handleLogout}>Logout</MenuItem>
                      </MenuList>
                    </ClickAwayListener>
                  </Paper>
                </Grow>
              )}
            </Popper>
          </div>
        )}
      </Styles.StyledToolbar>
    </Styles.StyledAppBar>
  );
};

export default RoomBar;
