import { Request, Response } from "express";

export const dashboardController = (_: Request, res: Response) => {
  res.render("pages/dashboard", {
    pageTitle: "Dashboard",
    message: "Dashboard",
    layout: "dashboard",
  });
};
