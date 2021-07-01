import { ThemeProvider as MuiThemeProvider } from "@material-ui/styles";
import { ThemeProvider } from "styled-components";
import * as Types from "./MaterialProvider.types";
import CssBaseline from "@material-ui/core/CssBaseline";

import { unstable_createMuiStrictModeTheme as createMuiTheme } from "@material-ui/core";

const fontFamily = [
  "-apple-system",
  "BlinkMacSystemFont",
  "Montserrat",
  "Segoe UI",
  "Roboto",
  "Oxygen",
  "Ubuntu",
  "Cantarell",
  "Fira Sans",
  "Droid Sans",
  "Helvetica Neue",
  "sans - serif",
].join(",");

const theme = createMuiTheme({
  typography: {
    button: {
      textTransform: "capitalize",
    },
    fontFamily: fontFamily,
  },
  palette: {
    primary: {
      main: "#29434e",
    },
    background: { default: "#819ca9" },
  },
  overrides: {
    MuiInput: {
      root: {
        color: "white",
      },
    },
    MuiFormLabel: {
      root: {
        color: "white",
      },
    },
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
