const bcrypt = require("bcrypt");
const db = require("../db");

module.exports = {
  getUser: function(username) {
    const query =
      process.env.NODE_ENV === "development"
        ? "SELECT * from test_users WHERE username = ${username}"
        : "SELECT * from prod_users WHERE username = ${username}";

    return db
      .one(query, {
        username
      })
      .catch(error => {
        return error;
      });
  },
  createUser: function(username, password) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);

    const query =
      process.env.NODE_ENV === "development"
        ? "insert into test_users(username, password) values( ${username}, ${password}) returning *"
        : "insert into prod_users(username, password) values( ${username}, ${password}) returning *";

    return db
      .one(query, {
        username,
        password: hash
      })
      .catch(error => {
        return error;
      });
  }
};
