import { Request, Response } from "express";

/**
 * Page: 'pages/dashboard'
 * Layout: 'dashboard'
 * Params: ['pageTitle', 'message']
 */
export const dashboardController = (_: Request, res: Response) => {
  res.render("pages/dashboard", {
    pageTitle: "Dashboard",
    message: "Dashboard",
    layout: "dashboard",
  });
};
