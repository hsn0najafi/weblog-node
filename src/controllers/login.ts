import { Request, Response } from "express";

export const loginController = (_: Request, res: Response) => {
  res.render("pages/login", {
    pageTitle: "Login",
    message: "Login",
    layout: "loginSignup",
  });
};
