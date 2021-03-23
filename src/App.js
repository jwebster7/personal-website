import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import AppContainer from "./components/app-container/app-container.component";

function App() {
  return (
    <BrowserRouter basename="/">
      <Switch>
        <Route exact path="/">
          <AppContainer />
        </Route>
        <Route>
          <Redirect to="/" />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
