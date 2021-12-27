import { Request, Response } from "express";

export const homeController = (_: Request, res: Response) => {
  res.render("index", {
    pageTitle: "Home",
    message: "Hello",
  });
};
