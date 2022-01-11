import { Request, Response, NextFunction } from "express";
import passport from "passport";

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
export const handleLogin = (_: Request, res: Response, next: NextFunction) => {
  passport.authenticate("local", {
    successRedirect: "/admin/dashboard",
    failureRedirect: "/users/login",
    failureFlash: true,
    // failureFlash: "مشکلی پیش آمده - ارور های فایل کانفیق رو نشون نده",
  })(_, res, next);
};
