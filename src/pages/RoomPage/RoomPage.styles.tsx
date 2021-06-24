import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex: 1;
  background-color: white;
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
  flex: 1;
  flex-direction: row;
  margin-top: 40px;
`;

export const Room = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  padding: 40px;
  background-color: #b6e6e5;
  width: 500px;
  height: 400px;
`;
