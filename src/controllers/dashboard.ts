import { Request, Response } from "express";

/**
 * @description    Dashbord
 * @pages          pages/private/dashboard
 * @param          [pageTitle, message]
 * @layout         dashboard
 */
declare global {
  namespace Express {
    interface User {
      fullName: string;
      email: string;
      password: string;
      createDate: DateConstructor | number;
    }
  }
}
export const dashboardController = (_: Request, res: Response) => {
  res.render("pages/private/dashboard", {
    pageTitle: "Dashboard",
    message: "Dashboard",
    layout: "dashboard",
    userFullName: _.user!.fullName,
  });
};
