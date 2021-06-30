import { Paper, Typography } from "@material-ui/core";
import styled from "styled-components";
import Rating from "@material-ui/lab/Rating";

export const Container = styled.div`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.1);
  }
`;

export const Card = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 185px;
  height: 320px;
  margin: 24px;
  border-radius: 8px;
  background-color: #29434e;
`;

export const Cover = styled.img`
  width: 185px;
  height: 280px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Stars = styled(Rating)`
  margin-top: 6px;
`;
