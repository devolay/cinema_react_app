import styled from "styled-components";

export const Container = styled.div<{ isBusy: boolean; notConfirmed?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isBusy, notConfirmed }) =>
    notConfirmed ? "#40c4ff" : isBusy ? "#ff1744" : "#4caf50"};
  height: 50px;
  width: 50px;
  margin: 10px;
  border-radius: 10px;
`;
