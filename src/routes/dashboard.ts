import { Router } from "express";

const router = Router();

/**
 * @description    Dashboard
 * @method         GET
 * @host           /admin/dashboard
 */
router.get(
  "/dashboard", require("../controllers/dashboard").dashboardController
);

module.exports = router;
