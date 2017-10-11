const moment = require("moment");
const { comparePass, encodeToken } = require("./helpers");
const { validateLoginForm, validateSignupForm } = require("./validation");
const { getUser, createUser } = require("../queries/user");

module.exports = {
  AttemptLogin: function(req, res) {
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
  },
  AttemptSignup: function(req, res) {
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
  }
};
