import * as Types from "./PageProvider.types";
import * as SharedStyles from "shared/styles";

const PageProvider = ({ children }: Types.Props) => {
  return <SharedStyles.PageWraper>{children}</SharedStyles.PageWraper>;
};

export default PageProvider;
