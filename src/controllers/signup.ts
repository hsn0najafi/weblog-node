import { Request, Response } from "express";

import { User } from "../models/User";

/**
 * Page: 'pages/signup'
 * Layout: 'loginSignup'
 * Params: ['pageTitle', 'message']
 */
export const signupController = (_: Request, res: Response) => {
  res.render("pages/signup", {
    pageTitle: "Signup",
    message: "Register",
    layout: "loginSignup",
    errors: ["hghsggfyewgayw"],
  });
};

/**
 * Register New User
 */
export const handleSignup = async (_: Request, res: Response) => {
  try {
    await User.userValidation(_.body);
    res.redirect("/users/login");
  } catch (err) {
    const errors = [];
    err.inner.map((e) => {
      errors.push({
        name: e.path,
        message: e.message,
      });
    });

    res.render("pages/signup", {
      pageTitle: "Signup",
      layout: "loginSignup",
      errors,
    });
  }
};
