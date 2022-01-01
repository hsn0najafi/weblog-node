import { Router } from "express";

const router = Router();

export const loginRouter = router.get(
  "/login",
  require("../controllers/login").loginController
);
