import moment from "moment";
import { comparePass, encodeToken } from "./helpers";
import { validateLoginForm, validateSignupForm } from "../validation";
import { getUser, createUser } from "./user";

export const AttemptLogin = (req, res) =>
  !validateLoginForm(req.body).success
    ? res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    : getUser(req.body.username)
        .then(res => {
          comparePass(req.body.password, res.password);
          return res;
        })
        .then(res => encodeToken(res))
        .then(token =>
          res.status(200).json({
            status: "success",
            token
          })
        )
        .catch(error =>
          res.status(500).json({
            status: "error",
            error
          })
        );

export const AttemptSignup = (req, res) =>
  !validateSignupForm(req.body)
    ? res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      })
    : createUser(req.body.username, req.body.password)
        .then(res => {
          comparePass(req.body.password, res.password);
          return res;
        })
        .then(res => encodeToken(res))
        .then(token => {
          res.status(200).json({
            status: "success",
            token
          });
        })
        .catch(() => {
          res.status(500).json({
            status: "error"
          });
        });
