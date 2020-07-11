import React from "react";
import ReactGA from 'react-ga';
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

console.log(process.env, 'process.env');
ReactGA.initialize(process.env.GA_CODE);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => (
  <ThemeProvider theme={theme}>
    <Roller />
  </ThemeProvider>
);

export default App;
