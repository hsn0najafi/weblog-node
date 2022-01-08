import { Request, Response } from "express";

/**
 * Page: 'pages/pageNotFound'
 * Layout: 'layout' - This is Main Layout - Set Optional
 * Params: ['pageTitle', 'message']
 */
export const pageNotFound = (_: Request, res: Response) => {
  res.render("pages/pageNotFound", {
    pageTitle: "pageNotFound",
    message: "Page Not Found",
    layout: "layout",
  });
};
