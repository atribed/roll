import React from "react";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import Roller from "./Roller";

const theme = createMuiTheme({
  palette: {
    primary: {
      light: "#efefef",
      main: "#000",
      dark: "#000",
      contrastText: "#fff",
    },
  },
});

const App = () => (
  <ThemeProvider theme={theme}>
    <Roller />
  </ThemeProvider>
);

export default App;
