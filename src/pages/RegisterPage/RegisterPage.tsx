import * as Types from "./RegisterPage.types";
import * as Styles from "./RegisterPage.styles";

const RegisterPage = ({}: Types.Props) => {
  return (
    <Styles.PageContainer>
      <Styles.ImageContainer>
        <Styles.RightContainer elevation={10}>
          <Styles.LoginFormContainer>
            <Styles.TitleHeader>Register</Styles.TitleHeader>
            <Styles.LoginContainer>
              <Styles.StyledTextField
                id="usernameField"
                label="username"
                type="input"
                variant="outlined"
              />
              <Styles.StyledTextField
                id="emailField"
                label="e-mail"
                type="input"
                variant="outlined"
              />
              <Styles.StyledTextField
                id="password1Field"
                label="password"
                type="password"
                variant="outlined"
              />
              <Styles.StyledTextField
                id="password2Field"
                label="repeat password"
                type="password"
                variant="outlined"
              />
              <Styles.LoginButton>REGISTER</Styles.LoginButton>
              <Styles.RegisterProposeContainer></Styles.RegisterProposeContainer>
            </Styles.LoginContainer>
          </Styles.LoginFormContainer>
        </Styles.RightContainer>
      </Styles.ImageContainer>
    </Styles.PageContainer>
  );
};

export default RegisterPage;
