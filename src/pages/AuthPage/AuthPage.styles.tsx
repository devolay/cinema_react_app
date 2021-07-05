import { Paper } from "@material-ui/core";
import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
  flex-direction: row;
  height: 100%;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%),
    url("https://firebasestorage.googleapis.com/v0/b/cinemasio.appspot.com/o/login_background.jpg?alt=media&token=9e9c3d2d-6dfc-41c4-84af-e38da0fe2b09");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const RightContainer = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  background-color: #29434e;
  border-radius: 0px;
  padding: 20px;
`;
