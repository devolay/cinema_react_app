import CinemaProvider from "./CinemaProvider";
import MaterialProvider from "./MaterialProvider";
import PageProvider from "./PageProvider";
import RouterProvider from "./RouterProvider";

const Providers = () => {
  return (
    <CinemaProvider>
      <MaterialProvider>
        <PageProvider>
          <RouterProvider />
        </PageProvider>
      </MaterialProvider>
    </CinemaProvider>
  );
};

export default Providers;
