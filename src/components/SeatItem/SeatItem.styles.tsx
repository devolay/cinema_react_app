import styled from "styled-components";

export const Container = styled.div<{ isBusy: boolean; notConfirmed?: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ isBusy, notConfirmed }) =>
    notConfirmed ? "#40c4ff" : isBusy ? "#c5314f" : "#78e97b"};
  height: 40px;
  width: 40px;
  border-radius: 10px;
  transition: 200ms;
  &:hover {
    transform: scale(1.1);
  }
`;
