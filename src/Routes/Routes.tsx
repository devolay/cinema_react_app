import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingScreen from "components/LoadingScreen/LoadingScreen";
import { Typography } from "@material-ui/core";
import { RoutesEnum } from "shared/types";
import PrivateRoute from "./PrivateRoute";
import PublicRoute from "./PublicRoute/index";

const NotFound = () => <Typography align="center">404 Not Found</Typography>;

const Routes = () => {
  const RoomPage = lazy(() => import("pages/RoomPage"));
  const ReservationFormPage = lazy(() => import("pages/ReservationFormPage"));
  const FilmsPage = lazy(() => import("pages/MoviesPage"));
  const DetailsPage = lazy(() => import("pages/DetailsPage"));
  const LoginPage = lazy(() => import("pages/LoginPage"));
  const RegisterPage = lazy(() => import("pages/RegisterPage"));

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route path={RoutesEnum.MoviesPage} exact component={FilmsPage} />
        <Route exact path={RoutesEnum.DetailsPage} component={DetailsPage} />
        <Route path={RoutesEnum.LoginPage} exact component={LoginPage} />
        <Route path={RoutesEnum.RegisterPage} exact component={RegisterPage} />
        <PrivateRoute exact path={RoutesEnum.ReservationFormPage} component={ReservationFormPage} />
        <PrivateRoute exact path={RoutesEnum.RoomPage} component={RoomPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
