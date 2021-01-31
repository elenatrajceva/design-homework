import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/private_route";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import MainView from "./features/map_overview/MainView.js";
import { ProvideAuth } from "./utils/use_auth";
import LoginView from "./features/login/LoginView";
const client = new ApolloClient({
  uri: "http://localhost:5000/api/graph",
  cache: new InMemoryCache(),
});
const App = () => {
  return (
    <ProvideAuth>
      <Router>
        <Switch>
          <PrivateRoute path="/main">
            <ApolloProvider client={client}>
              <MainView />
            </ApolloProvider>
          </PrivateRoute>
          <Route path="/">
            <LoginView />
          </Route>
        </Switch>
      </Router>
    </ProvideAuth>
  );
};

export default App;
