import { Request, Response } from "express";

export const homeController = (_: Request, res: Response) => {
  res.send("Hello");
};
