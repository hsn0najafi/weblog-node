// import "dotenv/config";
import dotenv from "dotenv";
import express, { Application } from "express";
import { logger } from "./middleware/logger";
import { homeRouter } from "./routes/home";

dotenv.config();

const app: Application = express();

// Logger
app.use(logger);

// Main Route
app.use(homeRouter);

const { PORT, HOST } = process.env;
app.listen(PORT, () =>
  console.log(`Server is Running on : http://${HOST}:${PORT}`)
);
