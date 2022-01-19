import { Request, Response } from "express";
import { Types } from "mongoose";
import multer from "multer";
import sharp from "sharp";
import { v4 as uuidv4 } from "uuid";

import { Blog } from "../models/Blog";
import { dateToJalali } from "../utils/jm";
import { get500 } from "./errorController";
import { fileFilter } from "../utils/multer";

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
    editMode: false,
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
      editMode: false,
    });
  }
};

/**
 * @description    Show Edit Post
 */
export const editPost = async (_: Request, res: Response) => {
  const post = await Blog.findOne({ _id: _.params.id });

  if (!post || post.userId != _.user!.id) {
    return res.redirect("/admin/blogs");
  } else {
    res.render("pages/admin/addPost", {
      pageTitle: "ویرایش پست",
      layout: "dashboard",
      path: "/newpost",
      editMode: true,
      post,
    });
  }
};

/**
 * @description    Handle Edit Post
 */
export const handleEditPost = async (_: Request, res: Response) => {
  const errors: any[] = [];

  const post = await Blog.findOne({ _id: _.params.id });

  try {
    await Blog.blogValidation(_.body);

    if (post!.userId.toString() !== _.user!.id.toString()) {
      return res.redirect("/admin/edit-post");
    } else {
      // const { title, status, body } = _.body;

      //--Data--------NewData--
      post!.title = _.body.title;
      post!.status = _.body.status;
      post!.body = _.body.body;

      await post!.save();
      return res.redirect("/admin/blogs");
    }
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
     * ReRender EditPost Page for Show Errors
     */
    res.render(`pages/admin/addPost${post!.id}`, {
      pageTitle: "ویرایش پست",
      layout: "dashboard",
      path: "/newpost",
      editMode: true,
      errors,
      post,
    });
  }
};

/**
 * @description    Handle Delete Post
 */
export const handleDeletePost = async (_: Request, res: Response) => {
  try {
    const post = await Blog.findOne({ _id: _.params.id });

    if (post!.userId.toString() !== _.user!.id.toString()) {
      return res.redirect("/admin/blogs");
    } else {
      await Blog.findByIdAndRemove(_.params.id);
      res.redirect("/admin/blogs");
    }
  } catch (err) {
    if (err) console.log(err);
    get500(_, res);
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
    limits: { fileSize: 1000000 },
    fileFilter,
  }).single("image");

  upload(_, res, async (err) => {
    if (err) {
      if (err.code === "LIMIT_FILE_SIZE") {
        return res.status(400).send("حجم عکس نباید بیشتر از ۵ مگ باشد");
      }
      res.send(err);
    } else {
      if (_.file) {
        const fileName = `${uuidv4()}_${_.file.originalname}`;

        await sharp(_.file.buffer)
          // .resize(800, 800)
          .jpeg({
            quality: 60,
          })
          .toFile(`./dist/public/uploads/images/${fileName}`)
          .catch((err) => console.log(err));

        res
          .status(200)
          .send(`http://192.168.43.3:3000/uploads/images/${fileName}`);
      } else {
        res.send("جهت آپلود باید عکسی انتخاب کنید");
      }
    }
  });
};
