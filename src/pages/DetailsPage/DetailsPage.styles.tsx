import { Paper } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Card = styled(Paper)`
  background-color: #29434e;
  width: 1000px;
  height: 600px;
  margin: 40px;
`;

export const Cover = styled.img`
  width: 185px;
  height: 320px;
  margin: 5px;
`;
