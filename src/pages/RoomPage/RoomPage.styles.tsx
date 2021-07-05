import { Button, Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
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
  height: 560px;
  padding: 30px;
  margin-bottom: 40px;
`;

export const LeftContainer = styled(Paper)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 500px;
  width: 25%;
  background-color: #97aabd;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  width: 75%;
`;

export const Cover = styled.img`
  width: 100%;
  height: 380px;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
`;

export const Room = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 40px;
  width: 500px;
  height: 400px;
  background-color: #1b1b1b;
`;

export const StyledButton = styled(Button)`
  margin: 20px;
  background-color: #97aabd;
  color: black;
`;

export const StyledText = styled(Typography)`
  font-size: 14px;
  color: black;
  margin-right: 10px;
  font-weight: 500;
`;

export const Bold = styled(Typography)`
  font-weight: bold;
  font-size: 14px;
  color: black;
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
  color: black;
  width: 100%;
`;

export const Stars = styled(Rating)`
  .MuiRating-iconEmpty {
    color: rgba(255, 255, 255, 0.4);
  }
`;
