import axios from "axios";

import { sharedHeaders } from "./_helpers";

export const login = (username, password, cb) =>
  axios({
    method: "post",
    headers: sharedHeaders,
    url: "/api/login",
    data: {
      username,
      password
    }
  })
    .then(data => cb(data))
    .catch(e =>
      cb({
        message: "failed login",
        errors: e
      })
    );

export const signup = (username, password, cb) =>
  axios({
    method: "post",
    headers: sharedHeaders,
    url: "/api/signup",
    data: {
      username,
      password
    }
  })
    .then(data => cb(data))
    .catch(e =>
      cb({
        message: "failed signup",
        errors: e
      })
    );

export const isUserAuthenticated = () => localStorage.getItem("token") !== null;

export const authenticateUser = token => localStorage.setItem("token", token);

export const deauthenticateUser = () => localStorage.removeItem("token");

export const getToken = () => localStorage.getItem("token");
