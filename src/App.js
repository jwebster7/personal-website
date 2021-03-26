import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import { ThemeProvider } from "styled-components";

import AppContainer from "./components/app-container/app-container.component";
import theme from "./theme";

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Switch>
          <Route exact path="/">
            <AppContainer />
          </Route>
          <Route>
            <Redirect to="/" />
          </Route>
        </Switch>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
