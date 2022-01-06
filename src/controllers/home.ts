import { Request, Response } from "express";

/**
 * Page: 'pages/home'
 * Layout: 'layout' - This is Main Layout - Set Optional
 * Params: ['pageTitle', 'message']
 */
export const homeController = (_: Request, res: Response) => {
  res.render("pages/home", {
    pageTitle: "Home",
    message: "Hello",
    layout: "layout",
  });
};
