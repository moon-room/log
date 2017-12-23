const moment = require("moment");
const { comparePass, encodeToken } = require("./helpers");
const { validateLoginForm, validateSignupForm } = require("./validation");
const { getUser, createUser } = require("../queries/user");

module.exports = {
  AttemptLogin: async function(req, res) {
    const validationResult = validateLoginForm(req.body);

    if (!validationResult.success) {
      res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      });
    } else {
      try {
        const user = await getUser(req.body.username);
        const passMatches = comparePass(req.body.password, user.password);

        if (!passMatches) {
          return res.status(400).json({
            success: false,
            errors: ["Password did not match password hash saved in database."]
          });
        }

        const token = encodeToken(res, user.password, user.id);

        return res.status(200).json({
          success: true,
          token
        });
      } catch (e) {
        return handleError(e, res);
      }
    }
  },
  AttemptSignup: async function(req, res) {
    const validationResult = validateLoginForm(req.body);

    if (!validationResult.success) {
      res.status(400).json({
        success: false,
        message: validationResult.message,
        errors: validationResult.errors
      });
    } else {
      try {
        const preexists = await getUser(req.body.username);

        if (preexists) {
          return res.status(400).json({
            success: false,
            errors: ["User already exists by this username."]
          });
        }

        const user = await createUser(req.body.username, req.body.password);
        const passMatches = comparePass(req.body.password, user.password);

        if (!passMatches) {
          return res.status(400).json({
            success: false,
            errors: ["Password did not match password hash saved in database."]
          });
        }

        const token = encodeToken(res, user.password, user.id);

        return res.status(200).json({
          success: false,
          token
        });
      } catch (e) {
        return handleError(e, res);
      }
    }
  }
};

function handleError(error, res) {
  return res.status(500).json({
    success: false,
    errors: [error]
  });
}
