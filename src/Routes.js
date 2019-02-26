import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store.js";

import App from "./containers/App";
import Shop from "./containers/Shop";
import Checkout from "./containers/Checkout";

const Routes = props => (
  <Provider store={store}>
    <Router>
        <App>
          <Route exact path="/checkout" component={Checkout} />
          <Route exact path="/" component={Shop} />
        </App>
    </Router>
  </Provider>
);

export default Routes;
