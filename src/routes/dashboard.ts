import { Router } from "express";

import {
  dashboardController,
  newPost,
  handleNewPost,
  blogs,
} from "../controllers/dashboard";
import { auth } from "../middlewares/auth";

const router = Router();

/**
 * @description    Show Dashboard
 * @method         GET
 * @host           /admin/dashboard
 */
router.get("/dashboard", auth, dashboardController);

/**
 * @description    Show New Post
 * @method         GET
 * @host           /admin/add-post
 */
router.get("/add-post", auth, newPost);

/**
 * @description    Handle New Post
 * @method         POST
 * @host           /admin/add-post
 */
router.post("/add-post", auth, handleNewPost);

/**
 * @description    Handle New Post
 * @method         POST
 * @host           /admin/blogs
 */
router.get("/blogs", auth, blogs);

module.exports = router;
