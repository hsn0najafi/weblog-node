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

module.exports = router;
