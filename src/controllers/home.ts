import { Request, Response } from "express";

import { Blog } from "../models/Blog";
import { dateToJalali } from "../utils/jm";
import { get500 } from "./errorController";

/**
 * @description    Home Page
 * @pages          pages/home
 * @layout         layout - Default(This Optional)
 */
export const homeController = async (_: Request, res: Response) => {
  let userFullName: string;
  _.user ? (userFullName = _.user!.fullName) : (userFullName = "no User");

  try {
    const posts = await Blog.find({ status: "عمومی" }).sort({
      createDate: "desc",
    });

    res.render("pages/home", {
      pageTitle: "Home",
      layout: "layout",
      userFullName,
      dateToJalali,
      path: "/home",
      posts,
    });
  } catch (err) {
    console.log(err);
    get500(_, res);
  }
};
