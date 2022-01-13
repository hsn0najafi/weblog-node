import { Request, Response } from "express";

/**
 * @description    Dashbord
 * @pages          pages/dashboard
 * @param          [pageTitle, message]
 * @layout         dashboard
 */
export const dashboardController = (_: Request, res: Response) => {
  res.render("pages/dashboard", {
    pageTitle: "Dashboard",
    message: "Dashboard",
    layout: "dashboard",
    userFullName: _.user!.fullName,
  });
};
