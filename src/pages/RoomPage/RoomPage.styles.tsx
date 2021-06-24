import { Button } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`;

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

export const Room = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 40px;
  width: 500px;
  height: 400px;
  background-color: #29434e;
`;

export const CenterContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 20px;
`;

export const StyledButton = styled(Button)`
  margin: 20px;
`;

export const CenterBottomContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 300px;
`;
