import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { TextField, Typography } from "@material-ui/core";

export const FormContainer = styled(Card)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #314455;
  flex-direction: column;
  border-radius: 10px;
  width: 300px;
  margin: 40px;
  padding: 20px;
`;

export const FormRow = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  flex-direction: row;
  padding: 10px;
`;

export const InputContainer = styled.div`
  justify-content: flex-start;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const StyledTextField = styled(TextField)`
  width: 250px;
  margin: 10px;
`;

export const StyledTypgraphy = styled(Typography)`
  display: flex;
  color: white;
  align-items: center;
  justify-content: center;
`;
