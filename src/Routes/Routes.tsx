import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingScreen from "components/LoadingScreen/LoadingScreen";
import { Typography } from "@material-ui/core";
import { RoutesEnum } from "shared/types";

const NotFound = () => <Typography align="center">404 Not Found</Typography>;

const Routes = () => {
  const RoomPage = lazy(() => import("pages/FilmsPage"));
  const ReservationFormPage = lazy(() => import("pages/ReservationFormPage"));
  const FilmsPage = lazy(() => import("pages/RoomPage"));

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route path={RoutesEnum.FilmsPage} exact component={FilmsPage} />
        <Route exact path={RoutesEnum.RoomPage} component={RoomPage} />
        <Route exact path={RoutesEnum.ReservationFormPage} component={ReservationFormPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
