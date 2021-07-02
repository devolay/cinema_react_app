import { useSelector } from "react-redux";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { RoutesEnum } from "shared/types";
import { selectLoggedIn } from "store/profiles";

const PublicRoute = (props: RouteProps) => {
  const isLoggedIn = useSelector(selectLoggedIn);

  return !isLoggedIn ? <Route {...props} /> : <Redirect to={RoutesEnum.MoviesPage} />;
};

export default PublicRoute;
