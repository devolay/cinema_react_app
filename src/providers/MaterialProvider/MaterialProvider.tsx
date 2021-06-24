import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import * as Types from "./MaterialProvider.types";
import CssBaseline from "@material-ui/core/CssBaseline";

import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "none",
    },
  },
  palette: {
    primary: {
      main: "#46caff",
    },
    background: { default: "#f4f4f4" },
  },
});

const MaterialProvider = ({ children }: Types.Props) => {
  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </MuiThemeProvider>
  );
};

export default MaterialProvider;
