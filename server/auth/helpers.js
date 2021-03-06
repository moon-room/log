import moment from "moment";
import jwt from "jwt-simple";
import bcrypt from "bcrypt";
import { validateLoginForm, validateSignupForm } from "../validation";
import { getUser, createUser } from "./user";


export const comparePass = (pass, hash) => 
  bcrypt.compareSync(pass, hash) ? true : throw new Error("bad password silly monkey");

export const encodeToken = user =>
  jwt.encode(
    {
      exp: moment()
        .add(14, "days")
        .unix(),
      iat: moment().unix(),
      sub: user.id
    },
    process.env.TOKEN_SECRET
  );

export const decodeToken = (token, cb) => {
  const now = moment().unix();
  const payload = jwt.decode(token, process.env.TOKEN_SECRET);
  const exp = payload.exp;
  now > exp ? cb("Token has expired.") : cb(null, payload);
};
