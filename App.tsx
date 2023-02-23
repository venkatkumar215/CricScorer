import React from "react";
import AppRouter from "./src/routes/AppRouter";
import { ThemeProvider, createTheme } from "@rneui/themed";
import appTheme from "./src/styles/theme";

const App = () => (

  
  <ThemeProvider theme={appTheme}>
    <AppRouter></AppRouter>
  </ThemeProvider>
);
export default App;
