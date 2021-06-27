import styled from "styled-components";
import { Pagination } from "@material-ui/lab";

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
  margin-bottom: 40px;
  margin-top: 40px;
`;

export const Pages = styled(Pagination)`
  margin: 20px;
`;
