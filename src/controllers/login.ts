import { Request, Response, NextFunction } from "express";

/**
 * @description    Login Page
 * @pages          pages/login
 * @param          [pageTitle, message]
 * @layout         loginSignup
 */
export const loginController = (_: Request, res: Response) => {
  res.render("pages/login", {
    pageTitle: "Login",
    message: _.flash("successfullLoginMessage"),
    layout: "loginSignup",
  });
};

/**
 * @description    Auth
 * @pages          pages/login
 * @param          [pageTitle, message]
 * @layout         loginSignup
 */
export const handleLogin = (
  _: Request,
  res: Response,
  next: NextFunction
) => {};
