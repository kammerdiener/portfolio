import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink
} from "react-router-dom";

import Home from "./Pages/home";

export default function App() {
  return (
    <Router>
      <div>
        <nav style={{backgroundColor: "#303030"}}>
          <img src={require("./img/logo.png")} width="250px" />


        </nav>

        <Switch>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
