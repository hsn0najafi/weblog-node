import { Router } from "express";

const router = Router();

export const homeRouter = router.get(
  "/",
  require("../controllers/home").homeController
);
