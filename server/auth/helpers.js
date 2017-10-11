const moment = require("moment");
const jwt = require("jwt-simple");
const bcrypt = require("bcrypt");
const { validateLoginForm, validateSignupForm } = require("./validation");
const { getUser, createUser } = require("../queries/user");

module.exports = {
  comparePass: function(pass, hash) {
    const compareResults = bcrypt.compareSync(pass, hash);
    return compareResults ? true : false;
  },
  encodeToken: function(pass, hash) {
    return jwt.encode(
      {
        exp: moment()
          .add(14, "days")
          .unix(),
        iat: moment().unix(),
        sub: user.id
      },
      process.env.TOKEN_SECRET
    );
  },
  decodeToken: function(token, cb) {
    const now = moment().unix();
    const payload = jwt.decode(token, process.env.TOKEN_SECRET);
    const exp = payload.exp;
    now > exp ? cb("Token has expired.") : cb(null, payload);
  }
};
