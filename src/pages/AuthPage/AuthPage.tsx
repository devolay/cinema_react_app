import * as Styles from "./AuthPage.styles";
import { useMediaQuery } from "@material-ui/core";
import LoginForm from "components/LoginForm";
import RegisterForm from "components/RegisterForm";
import { Route, Switch, useHistory } from "react-router-dom";
import { RoutesEnum } from "shared/types";

const AuthPage = () => {
  const matches = useMediaQuery("(min-width:600px)");
  const history = useHistory();

  return (
    <Styles.PageContainer>
      {matches && <Styles.ImageContainer></Styles.ImageContainer>}
      <Styles.RightContainer elevation={10}>
        <Switch>
          <Route
            exact
            path={RoutesEnum.LoginForm}
            render={(props) => (
              <LoginForm {...props} changeForm={() => history.push(RoutesEnum.RegisterForm)} />
            )}
          />
          <Route
            exact
            path={RoutesEnum.RegisterForm}
            render={(props) => (
              <RegisterForm {...props} changeForm={() => history.push(RoutesEnum.LoginForm)} />
            )}
          />
        </Switch>
      </Styles.RightContainer>
    </Styles.PageContainer>
  );
};

export default AuthPage;
