import { Router } from "express";

import {
  dashboardController,
  newPost,
  handleNewPost,
  editPost,
  blogs,
  handleRecieveImage,
  handleEditPost,
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
 * @description    Show Edit Post
 * @method         GET
 * @host           /admin/edit-post
 */
router.get("/edit-post/:id", auth, editPost);

/**
 * @description    Handle Edit Post
 * @method         POST
 * @host           /admin/edit-post
 */
router.post("/edit-post/:id", auth, handleEditPost);

/**
 * @description    show Posts
 * @method         POST
 * @host           /admin/blogs
 */
router.get("/blogs", auth, blogs);

/**
 * @description    Recieve Upload
 * @method         POST
 * @host           /admin/upload-image
 */
router.post("/upload-image", auth, handleRecieveImage);

module.exports = router;
