import { Request, Response } from "express";

export const homeController = (_: Request, res: Response) => {
  res.render("pages/home", {
    pageTitle: "Home",
    message: "Hello",
  });
};
