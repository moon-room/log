import React, { Component } from "react";
import { BrowserRouter, Route, Redirect } from "react-router-dom";

import { isUserAuthenticated } from "./api/security";

import MoonLog from "./components/views/MoonLog";
import Portal from "./components/views/Portal";

export default class App extends Component {
  state = {
    authenticated: false,
    user: ""
  };

  authenticateUser = () => {};
  grantAuthority = () => {};
  login = () => {};
  signup = () => {};
  setUser = () => {};

  render() {
    return (
      <BrowserRouter>
        <div id="App">
          <Route exact pattern="/portal" component={Portal} />
          <PrivateRoute exact pattern="/" component={MoonLog} />
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
