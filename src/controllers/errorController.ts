import { Request, Response, Router } from "express";

export const get404 = (_: Request, res: Response) => {
  res.render("pages/errors/404", {
    pageTitle: "pageNotFound",
    message: "صفحه مورد نظر پیدا نشد",
    layout: "layout",
  });
};

export const get500 = (_: Request, res: Response) => {
  res.render("pages/errors/505", {
    pageTitle: "ServerError",
    message: "سرور دچار مشکل شده",
    layout: "layout",
  });
};
