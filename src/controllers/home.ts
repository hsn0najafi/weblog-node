import { Request, Response } from "express";

/**
 * @description    Home Page
 * @pages          pages/home
 * @layout         layout - Default(This Optional)
 */
export const homeController = (_: Request, res: Response) => {
  res.render("pages/home", {
    pageTitle: "Home",
    message: "Hello",
    layout: "layout",
    userFullName: _.user!.fullName,
  });
};
