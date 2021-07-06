import CinemaProvider from "./CinemaProvider";
import MaterialProvider from "./MaterialProvider";
import PageProvider from "./PageProvider";
import RouterProvider from "./RouterProvider";
import { Provider } from "react-redux";
import store from "store";
import FirebaseProvider from "./FirebaseProvider";
import { Toaster } from "react-hot-toast";
import { MuiPickersUtilsProvider } from "@material-ui/pickers";
import DateFnsUtils from "@date-io/date-fns";

const Providers = () => {
  return (
    <Provider store={store}>
      <FirebaseProvider>
        <CinemaProvider>
          <MaterialProvider>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <PageProvider>
                <RouterProvider />
                <Toaster />
              </PageProvider>
            </MuiPickersUtilsProvider>
          </MaterialProvider>
        </CinemaProvider>
      </FirebaseProvider>
    </Provider>
  );
};

export default Providers;
