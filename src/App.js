import Overlay from "./components/OverlayButtons";
import logo from "./logo.svg";
import { BrowserRouter, Route, Link, Switch, Redirect } from "react-router-dom";
// import "./App.css";
import Main from "./Pages/Main";
import Dummy from "./Pages/Dummy";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => <Redirect to="/fritz-bleichert" />}
          />
          <Route exact path="/:artist" component={Dummy} />
        </Switch>

        <Overlay />
      </div>
    </BrowserRouter>
  );
}

export default App;
