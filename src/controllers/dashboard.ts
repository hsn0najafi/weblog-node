import { Request, Response } from "express";

import { Blog } from "../models/Blog";

/**
 * @description    Show Dashbord
 * @pages          pages/admin/dashboard
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
  res.render("pages/admin/dashboard", {
    pageTitle: "Dashboard",
    message: "Dashboard",
    layout: "dashboard",
    userFullName: _.user!.fullName,
  });
};

/**
 * @description    Show New Post
 * @pages          pages/users/addPost
 * @layout         dashboard
 */
export const newPost = (_: Request, res: Response) => {
  res.render("pages/users/addPost", {
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
