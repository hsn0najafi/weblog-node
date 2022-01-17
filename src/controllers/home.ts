import { Request, Response } from "express";

/**
 * @description    Home Page
 * @pages          pages/home
 * @layout         layout - Default(This Optional)
 */
export const homeController = (_: Request, res: Response) => {
  let userFullName: string;
  _.user ? (userFullName = _.user!.fullName) : (userFullName = "no User");

  res.render("pages/home", {
    pageTitle: "Home",
    message: "Hello",
    layout: "layout",
    userFullName,
  });
};
