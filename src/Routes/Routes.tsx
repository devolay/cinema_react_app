import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingScreen from "components/LoadingScreen/LoadingScreen";
import { Typography } from "@material-ui/core";
import { RoutesEnum } from "shared/types";

const NotFound = () => <Typography align="center">404 Not Found</Typography>;

const Routes = () => {
  const RoomPage = lazy(() => import("pages/RoomPage"));
  const ReservationFormPage = lazy(() => import("pages/ReservationFormPage"));

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route path={RoutesEnum.RoomPage} exact component={RoomPage} />
        <Route exact path={RoutesEnum.ReservationFormPage} component={ReservationFormPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
