import { Router } from "express";

const router = Router();

/**
 * Route: '/admin/dashboard'
 */
router.get(
  "/dashboard",
  require("../controllers/dashboard").dashboardController
);

module.exports = router;
