import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Provider } from "react-redux";
import { store } from "./store.js";

import App from "./containers/App";
import Shop from "./containers/Shop";

const Routes = props => (
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={Shop} />
        </Switch>
      </App>
    </Router>
  </Provider>
);

export default Routes;
