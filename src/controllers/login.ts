import { Request, Response } from "express";

/**
 * Page: 'pages/login'
 * Layout: 'loginSignup'
 * Params: ['pageTitle', 'message']
 */

  /**
   * @description    All NotDefined Routes
   * @pages          pages/pageNotFound
   * @param          [pageTitle, message]
   * @layout         layout - Default(This Optional)
   */
export const loginController = (_: Request, res: Response) => {
  res.render("pages/login", {
    pageTitle: "Login",
    message: "Login",
    layout: "loginSignup",
  });
};
