import { Router } from "express";

const router = Router();

export const dashboardRouter = router.get(
  "/dashboard",
  require("../controllers/dashboard").dashboardController
);
