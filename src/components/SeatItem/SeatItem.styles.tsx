import styled from "styled-components";

export const Container = styled.div<{ isBusy: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isBusy }) => (isBusy ? "#ff1744" : "#4caf50")};
  height: 50px;
  width: 50px;
  margin: 2px;
`;