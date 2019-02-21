import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router";
import { Provider } from "react-redux";
import { persistor, store } from "./store.js";
import { PersistGate } from "redux-persist/lib/integration/react";

import App from "./components/app/App";

const Routes = props => (
  <Provider store={store}>
    <Router>
      <App>
        <Switch>
          <Route exact path="/" component={App} />
          //<Route path="*" component={NotFound} />
        </Switch>
      </App>
    </Router>
  </Provider>
);

export default Routes;
