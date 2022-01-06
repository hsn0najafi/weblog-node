import { Request, Response } from "express";

/**
 * Page: 'pages/login'
 * Layout: 'loginSignup'
 * Params: ['pageTitle', 'message']
 */
export const loginController = (_: Request, res: Response) => {
  res.render("pages/login", {
    pageTitle: "Login",
    message: "Login",
    layout: "loginSignup",
  });
};
