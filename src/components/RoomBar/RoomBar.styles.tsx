import styled from "styled-components";
import { AppBar, Button, Menu, Toolbar } from "@material-ui/core";

export const StyledAppBar = styled(AppBar)`
  display: flex;
  height: 60px;
`;

export const StyledToolbar = styled(Toolbar)`
  display: flex;
  height: 60px;
  justify-content: space-between;
`;

export const BarButton = styled(Button)`
  margin-left: 20px;
  font-family: "Montserrat", sans-serif;
  font-weight: bold;
`;

export const LeftContainer = styled.div`
  display: flex;
`;
