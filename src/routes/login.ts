import { Router } from "express";

const router = Router();

export const loginRouter = router.get(
  "/",
  require("../controllers/home").homeController
);
