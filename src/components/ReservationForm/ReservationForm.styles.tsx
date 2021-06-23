import styled from "styled-components";
import { FormControl } from "@material-ui/core";
import { TextField } from "@material-ui/core";

export const FormContainer = styled.div`
  display: flex;
  align-items: stretch;
  justify-content: flex-start;
  background-color: #314455;
  flex-direction: column;
  border: none;
  border-radius: 10px;
  width: 540px;
  height: 440px;
  margin: 40px;
  padding: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: row;
  padding: 10px;
`;

export const StyledTextField = styled(TextField)``;
