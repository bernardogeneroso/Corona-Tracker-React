import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Main/";
import Country from "./pages/Country/";

function routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/country" component={Country} />
      </Switch>
    </Router>
  );
}

export default routes;
