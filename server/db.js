const pgp = require("pg-promise")();
pgp.pg.defaults.ssl = true;
module.exports = pgp(process.env.DATABASE_URL);
