import * as Types from "./LoginPage.types";
import * as Styles from "./LoginPage.styles";
import * as SharedStyles from "shared/styles";
import { useFirebase } from "react-redux-firebase";
import { useHistory } from "react-router-dom";
import { RoutesEnum } from "shared/types";

const LoginPage = ({}: Types.Props) => {
  const firebase = useFirebase();
  const history = useHistory();

  const goToRegisterPage = () => {
    history.push(RoutesEnum.RegisterPage);
  };

  return (
    <Styles.PageContainer>
      <Styles.ImageContainer>
        <Styles.RightContainer elevation={10}>
          <Styles.LoginFormContainer>
            <Styles.TitleHeader>Login</Styles.TitleHeader>
            <Styles.LoginContainer>
              <Styles.StyledTextField
                id="usernameField"
                label="username"
                type="inpuy"
                variant="outlined"
              />
              <Styles.StyledTextField
                id="passwordField"
                label="password"
                type="password"
                variant="outlined"
              />
              <Styles.LoginButton>LOGIN</Styles.LoginButton>
              <Styles.RegisterProposeContainer>
                <Styles.StyledTypo variant="body2">Don't have an account?</Styles.StyledTypo>
                <Styles.StyledLink onClick={goToRegisterPage}>Register</Styles.StyledLink>
              </Styles.RegisterProposeContainer>
            </Styles.LoginContainer>
            <Styles.OutsideLoginContainer>
              <Styles.GoogleButton>LOGIN WITH GOOGLE</Styles.GoogleButton>
              <Styles.FacebookButton>LOGIN WITH FACEBOOK</Styles.FacebookButton>
            </Styles.OutsideLoginContainer>
          </Styles.LoginFormContainer>
        </Styles.RightContainer>
      </Styles.ImageContainer>
    </Styles.PageContainer>
  );
};

export default LoginPage;
