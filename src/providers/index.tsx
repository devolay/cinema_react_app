import CinemaProvider from "./CinemaProvider";
import MaterialProvider from "./MaterialProvider";
import PageProvider from "./PageProvider";
import RouterProvider from "./RouterProvider";
import { Provider } from "react-redux";
import store from "store";
import FirebaseProvider from "./FirebaseProvider";
import { Toaster } from "react-hot-toast";

const Providers = () => {
  return (
    <Provider store={store}>
      <FirebaseProvider>
        <CinemaProvider>
          <MaterialProvider>
            <PageProvider>
              <RouterProvider />
              <Toaster />
            </PageProvider>
          </MaterialProvider>
        </CinemaProvider>
      </FirebaseProvider>
    </Provider>
  );
};

export default Providers;
