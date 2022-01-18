import { Request, Response } from "express";
import { Types } from "mongoose";
import multer from "multer";
import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";

import { Blog } from "../models/Blog";
import { dateToJalali } from "../utils/jm";
import { get500 } from "./errorController";
import { storage, fileFilter } from "../utils/multer";

/**
 * @description    Show Dashbord
 * @pages          pages/admin/dashboard
 * @layout         dashboard
 */
declare global {
  namespace Express {
    interface User {
      id: Types.ObjectId;
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
 * @pages          pages/admin/addPost
 * @layout         dashboard
 */
export const newPost = (_: Request, res: Response) => {
  res.render("pages/admin/addPost", {
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
  const errors: any[] = [];

  try {
    await Blog.blogValidation(_.body);
    await Blog.create({ ..._.body, userId: _.user!.id });
    res.redirect("/admin/blogs");
  } catch (err: any) {
    console.log(err);
    /**
     * Push Errors to a Array and then Show it's
     * Errors Controller
     */
    if (err.inner !== undefined) {
      err.inner.map((e: any) => {
        errors.push({
          name: e.path,
          message: e.message,
        });
      });
    }
    /**
     * ReRender AddPost Page for Show Errors
     */
    res.render("pages/admin/addPost", {
      pageTitle: "NewPost",
      layout: "dashboard",
      path: "/newpost",
      errors,
    });
  }
};

/**
 * @description    Show Blogs
 */
export const blogs = async (_: Request, res: Response) => {
  try {
    const blogs = await Blog.find({ userId: _.user!.id });

    res.render("pages/admin/blogs", {
      pageTitle: "Blogs",
      layout: "layout",
      userFullName: _.user!.fullName,
      blogs,
      path: "/blogs",
      dateToJalali,
    });
  } catch (err) {
    if (err) console.log(err);
    get500(_, res);
  }
};

/**
 * @description    handle Recieve Image
 */
export const handleRecieveImage = (_: Request, res: Response) => {
  const upload = multer({
    limits: { fileSize: 5000000 },
    // dest: "uploads/images/",
    // storage,
    fileFilter,
  }).single("image");

  upload(_, res, async (err) => {
    if (err) {
      res.send(err);
    } else {
      if (_.file) {
        console.log(_.file);
        const fileName = `${uuidv4()}_${_.file.originalname}`;

        await sharp(_.file.buffer)
          // .resize(800, 800)
          .jpeg({
            quality: 60,
          })
          .toFile(`./dist/public/uploads/images/${fileName}`)
          .catch((err) => console.log(err));

        res.status(200).send("آپلود عکس موفقیت آمیز بود");
      } else {
        res.send("جهت آپلود باید عکسی انتخاب کنید");
      }
    }
  });
};
