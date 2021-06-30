import { Paper, Typography } from "@material-ui/core";
import styled from "styled-components";

export const Card = styled(Paper)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100px;
  height: 180px;
  border-radius: 8px;
  background-color: #97aabd;
`;

export const Avatar = styled.img`
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  width: 100px;
  height: 140px;
  margin-bottom: 2px;
`;

export const StyledText = styled(Typography)`
  font-size: 10px;
  flex-wrap: wrap;
`;

export const Bold = styled(Typography)`
  font-weight: bold;
  font-size: 12px;
  flex-wrap: wrap;
`;
