import { Request, Response } from "express";

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
  });
};
