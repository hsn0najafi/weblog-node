import { Router } from "express";

import { auth } from "../middlewares/auth";

const router = Router();

/**
 * @description    Dashboard
 * @method         GET
 * @host           /admin/dashboard
 */
router.get(
  "/dashboard",
  auth,
  require("../controllers/dashboard").dashboardController
);

/**
 * @description    New Post
 * @method         GET
 * @host           /admin/newpost
 */
router.get("/newpost", auth, require("../controllers/dashboard").newPost);

module.exports = router;

/**
 * @description    Handle New Post
 * @method         POST
 * @host           /admin/newpost
 */
router.post(
  "/newpost",
  auth,
  require("../controllers/dashboard").handleNewPost
);

module.exports = router;
