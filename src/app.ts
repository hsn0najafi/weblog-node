// import "dotenv/config";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";
import { logger } from "./middleware/logger";

dotenv.config();

const app: Application = express();

// Logger
app.use(logger);

// Main Route
app.get("/", (_: Request, res: Response) => {
  res.send("Hello");
});

const { PORT, HOST } = process.env;
app.listen(PORT, () =>
  console.log(`Server is Running on : http://${HOST}:${PORT}`)
);
