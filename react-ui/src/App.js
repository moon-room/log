import React, { Component } from "react";
import { BrowserRouter, Route, Redirect, Switch } from "react-router-dom";

import { isUserAuthenticated } from "./api/security";

import MoonLog from "./components/views/MoonLog";
import Portal from "./components/views/Portal";
import { authenticateUser } from "./api/security";

export default class App extends Component {
  state = {
    authenticated: false,
    username: ""
  };

  authenticateUser = token => authenticateUser(token);

  grantAuthority = (authenticated, username) =>
    this.setState({
      authenticated,
      username
    });

  render() {
    return (
      <BrowserRouter>
        <div id="App">
          <Switch>
            <Route
              exact
              pattern="/portal"
              component={Portal}
              authenciationProps={{
                authenticateUser: this.authenciateUser,
                grantAuthority: this.grantAuthority
              }}
            />
            <PrivateRoute exact pattern="/" component={MoonLog} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props =>
        isUserAuthenticated() ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/portal",
              state: { from: props.location }
            }}
          />
        )}
    />
  );
};
