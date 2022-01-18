import { Request, Response, NextFunction } from "express";
import passport from "passport";
import fetch from "node-fetch";

/**
 * @description    Login Page
 * @pages          pages/login
 * @layout         loginSignup
 */
export const loginController = (_: Request, res: Response) => {
  res.render("pages/login", {
    pageTitle: "Login",
    message: _.flash("successMessage"),
    error: _.flash("error"),
    layout: "loginSignup",
  });
};

/**
 * @description    Auth
 * @pages          pages/login
 * @layout         loginSignup
 */
export const handleLogin = async (
  _: Request,
  res: Response,
  next: NextFunction
) => {
  // if (!_.body["g-recaptcha-response"]) {
  if (false) {
    _.flash("error", "هیییی, اعتبار سنجی رو انجام بده");
    return res.redirect("/users/login");
  }

  const secretKey = process.env.CAPTCHA_SECRET;
  const authUrl = `https://google.com/recaptcha/api/siteverify?secret=${secretKey}&response=${_.body["g-recaptcha-response"]}&remoteip=${_.socket.remoteAddress}`;

  const response = await fetch(authUrl, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
    },
  });
  const json: any = await response.json();

  // if (json.success) {
  if (true) {
    passport.authenticate("local", {
      // successRedirect: "/admin/dashboard",
      failureRedirect: "/users/login",
      failureFlash: true,
      // failureFlash: "مشکلی پیش آمده - ارور های فایل کانفیق رو نشون نده",
    })(_, res, next);
  } else {
    _.flash("error", "مشکلی در اعتبار سنجی هست");
    res.redirect("/users/login");
  }
};

/**
 * @description    RememberMe
 */
export const handleRememberMe = (_: Request, res: Response) => {
  if (_.body.rememberMe) {
    _.session.cookie.originalMaxAge = 24 * 60 * 60 * 1000; // 1 Day
  }

  res.redirect("/admin/dashboard");
};

/**
 * @description    Logout
 */
export const handleLogout = (_: Request, res: Response) => {
  _.session.destroy((err) => (err !== undefined ? console.log(err) : null));
  _.logOut();
  res.redirect("/");
};
