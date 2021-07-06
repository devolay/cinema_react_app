import { Button, Paper, Typography } from "@material-ui/core";
import { Rating } from "@material-ui/lab";
import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 5px;
`;

export const Screen = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 80%;
  background-color: grey;
  height: 20px;
  border-radius: 50px;
  margin-bottom: 20px;
`;

export const RoomContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
  margin-top: 40px;
  width: 100%;
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
  padding: 20px;
  margin-bottom: 30px;
`;

export const LeftContainer = styled(Paper)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  height: 520px;
  width: 25%;
  background-color: #97aabd;
`;

export const InfoContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 10px;
`;

export const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 75%;
`;

export const RightUpperContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 80%;
  flex-direction: row;
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
  align-items: center;
  justify-content: flex-start;
  padding: 10px;
  border-radius: 10px;
  height: 350px;
  width: 80%;
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

export const ScreenTitle = styled(Bold)`
  color: white;
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
