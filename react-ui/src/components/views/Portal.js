import React, { Component } from "react";
import { Redirect } from "react-router-dom";

export default class Portal extends Component {
  state = {
    errors: {},
    username: "",
    password: "",
    redirectToReferrer: false
  };

  pass = (token, username) => {
    this.props.authenticateUser(token);
    this.props.grantAuthority({
      authenticated: true,
      username
    });

    this.setState({
      redirectToReferrer: true
    });
  };

  authenticateLoginAttempt = e => {
    e.preventDefault();
    const { username, password, failureAttempts } = this.state;

    this.props.login(
      encodeURIComponent(username),
      encodeURIComponent(password),
      ({ data }) => {
        if (!data) {
          if (failureAttempts >= 3) {
            // set locked cookie.
            // redirect to some messed up website.
          } else {
            this.setState({
              error: "User not found",
              failureAttempts: failureAttempts + 1
            });
          }
        } else {
          this.pass(data.token, username);
        }
      }
    );
  };

  authenticateSignupAttempt = e => {
    e.preventDefault();
    const { username, password } = this.state;

    this.props.signup(
      encodeURIComponent(username),
      encodeURIComponent(password),
      ({ data }) => {
        if (data) {
          this.pass(data.token, username);
        } // TODO: add else for failures
      }
    );
  };

  render() {
    const { username, password, redirectToReferrer } = this.state;

    return redirectToReferrer ? (
      <Redirect to="/" />
    ) : (
      <div className="login-container">
        <div className="form-group">
          <label>Username: </label>
          <input
            id="username"
            value={username}
            onChange={e => this.setState({ username: e.target.value })}
          />
        </div>

        <div className="form-group">
          <label>Password: </label>
          <input
            id="password"
            value={password}
            type="password"
            onChange={e => this.setState({ password: e.target.value })}
          />
        </div>

        <div className="button-container">
          <button onClick={this.authenticateLoginAttempt}>Login</button>
          <button onClick={this.authenticateSignupAttempt}>Signup</button>
        </div>
      </div>
    );
  }
}
