import * as Types from "./AuthPage.types";
import * as Styles from "./AuthPage.styles";
import { useMediaQuery } from "@material-ui/core";
import { useState, useEffect } from "react";
import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";
import { Route, Switch, useHistory } from "react-router-dom";
import PublicRoute from "Routes/PublicRoute";
import { RoutesEnum } from "shared/types";

const AuthPage = ({}: Types.Props) => {
  const matches = useMediaQuery("(min-width:600px)");
  const [isRegisterForm, setIsRegisterForm] = useState(false);
  const history = useHistory();

  useEffect(
    () => history.push(isRegisterForm ? RoutesEnum.RegisterForm : RoutesEnum.LoginForm),
    [isRegisterForm]
  );

  return (
    <Styles.PageContainer>
      {matches && <Styles.ImageContainer></Styles.ImageContainer>}
      <Styles.RightContainer elevation={10}>
        <Switch>
          <Route
            exact
            path={RoutesEnum.LoginForm}
            render={(props) => <LoginForm {...props} changeForm={setIsRegisterForm} />}
          />
          <Route
            exact
            path={RoutesEnum.RegisterForm}
            render={(props) => <RegisterForm {...props} changeForm={setIsRegisterForm} />}
          />
        </Switch>
      </Styles.RightContainer>
    </Styles.PageContainer>
  );
};

export default AuthPage;
