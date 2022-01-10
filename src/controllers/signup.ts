import { Request, Response } from "express";

import { User } from "../models/User";

/**
 * @description    Signup/Register Page
 * @pages          pages/signup
 * @param          [pageTitle, message]
 * @layout         loginSignup
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
     * Create a New User on Database
     */
    await User.create(_.body);

    /**
     * if Form Valid - Redirect to Login Page
     */
    res.redirect("/users/login");
  } catch (err: any) {
    const errors: any[] = [];

    /**
     * Push Errors to a Array and then Show it's
     * Errors Controller
     */
    if (err !== undefined) {
      if (err.inner !== undefined)
        err.inner.map((e: any) => {
          errors.push({
            name: e.path,
            message: e.message,
          });
        });

      /**
       * This is for Duplicate Email Addresses
       * 'mongoose' byDefault not Support This - (mongoose-unique-validator)
       */
      if (err.code === 11000) {
        errors.push({
          name: "email",
          message: "این ایمیل قبلا ثبت شده",
        });
      }
    }

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
