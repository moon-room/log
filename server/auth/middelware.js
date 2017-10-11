const { decodeToken } = require("../auth/helpers");
const { getUser } = require("../queries/user");

module.exports = function(req, res, next) {
  if (!(req.headers && req.headers.token)) {
    return res.status(400).json({
      status: "Please log in"
    });
  }

  return decodeToken(req.headers.token, (err, payload) => {
    if (err) {
      return res.status(401).json({
        status: "Token has expired"
      });
    } else {
      return getUser(req.headers.username).then(user => {
        if (!user || payload.sub !== user.id) {
          return res.status(400).json({
            status: "Please log in"
          });
        } else {
          next();
        }
      });
    }
  });
};
