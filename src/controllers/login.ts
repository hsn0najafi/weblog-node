import { Request, Response } from "express";

/**
 * @description    Login and Auth Page
 * @pages          pages/login
 * @param          [pageTitle, message]
 * @layout         loginSignup
 */
export const loginController = (_: Request, res: Response) => {
  res.render("pages/login", {
    pageTitle: "Login",
    message: "Login",
    layout: "loginSignup",
  });
};
