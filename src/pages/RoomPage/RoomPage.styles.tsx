import { Button, Paper, Typography } from "@material-ui/core";
import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: center;
`;

export const RoomContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
`;

export const Card = styled(Paper)`
  background-color: #29434e;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: row;
  margin-top: 40px;
  width: 80%;
  border-radius: 20px;
  height: 500px;
`;

export const LeftContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 400px;
  width: 25%;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 400px;
  width: 75%;
`;

export const Cover = styled.img`
  width: 100%;
  height: 380px;
  border-top-left-radius: 20px;
`;

export const Room = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 40px;
  width: 500px;
  height: 400px;
  background-color: black;
`;

export const StyledButton = styled(Button)`
  margin: 20px;
  background-color: #97aabd;
`;

export const StyledText = styled(Typography)`
  font-size: 14px;
  color: white;
  margin-right: 10px;
`;

export const Bold = styled(Typography)`
  font-weight: bold;
  font-size: 14px;
  color: white;
  flex-wrap: wrap;
`;

export const Info = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 80%;
  margin-left: 20px;
  margin-bottom: 10px;
`;

export const CenterBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  width: 440px;
`;

export const TitleHeader = styled(Bold)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  font-size: 18px;
  color: white;
  width: 100%;
`;
