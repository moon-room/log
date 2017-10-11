const bcrypt = require("bcrypt");
const db = require("../db");

module.exports = {
  getUser: function(username) {
    return db
      .one("SELECT * from users WHERE username = ${username}", { username })
      .catch(e => new Error(e));
  },
  createUser: function(username, password) {
    const salt = bcrypt.genSaltSync();
    const hash = bcrypt.hashSync(password, salt);

    return db
      .one(
        "insert into users(username, password) values( ${username}, ${password}) returning *",
        {
          username,
          password: hash
        }
      )
      .catch(e => new Error(e));
  }
};
