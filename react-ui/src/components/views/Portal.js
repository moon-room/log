import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import "./portal.css";
import moon from "../../media/logo.png";

import { login, signup } from "../../api/security";

export default class Portal extends Component {
  state = {
    errors: [],
    username: "",
    password: "",
    authenticationPassed: false
  };

  pass = (token, username) => {
    const { authenticateUser, grantAuthority } = this.props;

    authenticateUser(token);
    grantAuthority({
      authenticated: true,
      username
    });

    this.setState({
      authenticationPassed: true,
      username: "",
      password: "",
      errors: []
    });
  };

  authenticateLoginAttempt = e => {
    e.preventDefault();
    const { username, password, failureAttempts } = this.state;

    login(
      encodeURIComponent(username),
      encodeURIComponent(password),
      response => {
        if (!response.data) {
          if (failureAttempts >= 3) {
            // set locked cookie.
            // redirect to some messed up website.
          } else {
            this.setState({
              errors: response.errors.response.data.errors,
              failureAttempts: failureAttempts + 1
            });
          }
        } else {
          this.pass(response.data.token, username);
        }
      }
    );
  };

  authenticateSignupAttempt = e => {
    e.preventDefault();
    const { username, password, failureAttempts } = this.state;

    signup(
      encodeURIComponent(username),
      encodeURIComponent(password),
      response => {
        if (!response.data) {
          if (failureAttempts >= 3) {
            // set locked cookie.
            // redirect to some messed up website.
          } else {
            this.setState({
              errors: response.errors.response.data.errors,
              failureAttempts: failureAttempts + 1
            });
          }
        } else {
          this.pass(response.data.token, username);
        }
      }
    );
  };

  render() {
    const { username, password, authenticationPassed, errors } = this.state;

    return authenticationPassed ? (
      <Redirect to="/" />
    ) : (
      <div className="portal">
        <div className="login-container">
          <div className="introduction">
            <img className="logo" src={moon} alt="moon" />
            <p className="description">
              Welcome to the <strong>MOON LOG</strong>. Log your trades, reflect
              on your actions, learn and grow. Fill in the form, click login if
              you have an account, or register to make a new one.
            </p>
          </div>
          {errors &&
            errors.map((error, i) => (
              <p key={i} className="error-message">
                {error}
              </p>
            ))}
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
            <button className="green" onClick={this.authenticateLoginAttempt}>
              Login
            </button>
            <button className="blue" onClick={this.authenticateSignupAttempt}>
              Signup
            </button>
          </div>
        </div>
      </div>
    );
  }
}
