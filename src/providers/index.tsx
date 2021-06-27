import CinemaProvider from "./CinemaProvider";
import MaterialProvider from "./MaterialProvider";
import PageProvider from "./PageProvider";
import RouterProvider from "./RouterProvider";
import { Provider } from "react-redux";
import store from "store";

const Providers = () => {
  return (
    <Provider store={store}>
      <CinemaProvider>
        <MaterialProvider>
          <PageProvider>
            <RouterProvider />
          </PageProvider>
        </MaterialProvider>
      </CinemaProvider>
    </Provider>
  );
};

export default Providers;
