import { Router } from "express";

import { homeController } from "../controllers/home";

const router = Router();

export const homeRouter = router.get("/", homeController);
