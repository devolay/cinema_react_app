import styled from "styled-components";
import { Button, Link, Paper, TextField, Typography } from "@material-ui/core";

export const PageContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-start;
  width: 100%;
  height: 100vh;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
  flex: 1;
  flex-direction: row;
  height: 100%;
  background-image: radial-gradient(circle, rgba(255, 255, 255, 0.1) 0%, rgba(0, 0, 0, 0.8) 100%),
    url("https://firebasestorage.googleapis.com/v0/b/cinemasio.appspot.com/o/login_background.jpg?alt=media&token=9e9c3d2d-6dfc-41c4-84af-e38da0fe2b09");
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: fixed;
`;

export const RightContainer = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  height: 100%;
  background-color: #29434e;
  border-radius: 0px;
  padding: 20px;
`;

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

export const LoginButton = styled(Button)`
  background-color: #819ca9;
  color: white;
  height: 50px;
  font-weight: bold;
  letter-spacing: 0.1rem;
  margin-top: 40px;
`;

export const LoginContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: column;
  width: 100%;
  height: 400px;
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
