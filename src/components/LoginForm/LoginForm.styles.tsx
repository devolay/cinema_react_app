import { Button, Link, TextField, Typography } from "@material-ui/core";
import styled from "styled-components";

export const LoginFormContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-direction: column;
  max-width: 450px;
  width: 100%;
  height: 500px;
`;

export const TitleHeader = styled(Typography)`
  color: white;
  font-size: 3rem;
  font-weight: 300;
  line-height: 1;
`;

export const FacebookButton = styled(Button)`
  color: white;
  background-color: #3b5998;
  height: 50px;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

export const GoogleButton = styled(Button)`
  color: #de5246;
  background-color: white;
  height: 50px;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

export const LoginButton = styled(Button)`
  background-color: #819ca9;
  color: white;
  height: 50px;
  font-weight: bold;
  letter-spacing: 0.1rem;
`;

export const OutsideLoginContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 120px;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 250px;
`;

export const StyledTextField = styled(TextField)`
  height: 40px;
  letter-spacing: 0.1rem;
  .MuiFormHelperText-root {
    color: #ff5252;
  }
  .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: white;
  }
  .MuiInputLabel-outlined {
    color: white;
  }
  .MuiOutlinedInput-input {
    color: white;
  }
`;

export const RegisterProposeContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: row;
`;

export const StyledTypo = styled(Typography)`
  color: white;
  margin-top: 5px;
`;

export const StyledLink = styled(Link)`
  color: #1db2ec;
  margin-top: 5px;
  margin-left: 5px;
`;

export const BackButton = styled(Button)`
  border-radius: 50%;
  height: 40px;
  width: 40px;
  background-color: #3b5998;
  color: white;
`;
