import { Request, Response } from "express";

/**
 * @description    Dashbord
 * @pages          pages/private/dashboard
 * @param          [pageTitle, message, userFullName]
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

/**
 * @description    New Post
 * @pages          pages/private/addPost
 * @param          [pageTitle, message, userFullName]
 * @layout         dashboard
 */
export const handleNewPost = (_: Request, res: Response) => {
  res.render("pages/private/addPost", {
    pageTitle: "NewPost",
    layout: "dashboard",
    userFullName: _.user!.fullName,
  });
};
