import type { Request, Response } from "express";
import User from "../models/user.models.ts";
import type { SignupTypes } from "../Types/Auth";
import { cookies } from "../utils/cookie.ts";
import { jwt_token } from "../utils/jwt.ts";
import bcrypt from "bcryptjs"
export const signup = async (req: Request, res: Response) => {


  const { fullName, email, password }: SignupTypes = req.body;

  if(!fullName ||!email ||!password){
    return res.status(402).json({
      message:"Add all the credentials"
    })
  }

  try {
    if (password.length < 6) {
      return res.status(402).json({
        message: "Password should be at least 6 character",
      });
    }

    const user = await User.findOne({ email });

    if (user) {
      return res.status(401).json({ message: "User with same mail already exist" });
    }

    const passSalt = await bcrypt.genSalt(12);

    const hashPassword = await bcrypt.hash(password, passSalt);

    const newUser = new User({
      fullName,
      email,
      password: hashPassword,
    });

    if (newUser) {
      const token = jwt_token.sign(newUser);
      cookies.set(res,"token",token);
    }
  } catch (error) {}
};

export const signin = (req: Request, res: Response) => {
  res.status(200).send("this is the signin route");
};
export const signout = (req: Request, res: Response) => {
  res.status(200).send("this is the signout route");
};
