import { Request, Response } from "express";

import { Blog } from "../models/Blog";

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
 * @param          [pageTitle, message, userFullName, path]
 * @layout         dashboard
 */
export const newPost = (_: Request, res: Response) => {
  res.render("pages/private/addPost", {
    pageTitle: "NewPost",
    layout: "dashboard",
    userFullName: _.user!.fullName,
    path: "/newpost",
  });
};

/**
 * @description    Handle New Post
 */
export const handleNewPost = async (_: Request, res: Response) => {
  try {
    await Blog.create({ ..._.body, user: _.body.user });
    res.redirect("/admin/dashboard");
  } catch (err) {
    console.log(err);
  }
};
