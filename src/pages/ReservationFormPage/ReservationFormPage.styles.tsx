import styled from "styled-components";
import Card from "@material-ui/core/Card";
import { Button, TextField, Typography } from "@material-ui/core";

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
  justify-content: space-between;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 10px;
  width: 220px;
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

export const StyledButton = styled(Button)`
  color: white;
  background-color: #90a4ae;
`;

export const Error = styled.p`
  font-size: 14px;
  margin: 4px 0 4px 0;
  color: #f20f17;
`;
