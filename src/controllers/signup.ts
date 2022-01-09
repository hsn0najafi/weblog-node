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

    /**
     * if Form Valid - Redirect to Login Page
     */
    res.redirect("/users/login");
  } catch (err: any) {
    const errors: any[] = [];

    /**
     * Push Errors to a Array and then Show it's
     */
    err.inner.map((e: any) => {
      errors.push({
        name: e.path,
        message: e.message,
      });
    });

    /**
     * ReRender Register Page for Show Errors
     */
    res.render("pages/signup", {
      pageTitle: "Signup",
      layout: "loginSignup",
      errors,
    });
  }
};
