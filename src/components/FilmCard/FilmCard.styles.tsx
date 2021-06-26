import { Paper, Typography } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Card = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 320px;
  margin: 24px;
  border-radius: 8px;
`;

export const Cover = styled.img`
  width: 200px;
  height: 320;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Title = styled(Typography)`
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;
