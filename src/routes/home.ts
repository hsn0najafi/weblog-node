import { Router, Request, Response } from "express";

const router = Router();

export const homeRouter = router.get("/", (_: Request, res: Response) => {
  res.send("Hello");
});
