import path from "path";

// import "dotenv/config";
import dotenv from "dotenv";
import express, { Application } from "express";
import ejs from "ejs";

import { logger } from "./middleware/logger";
import { homeRouter } from "./routes/home";

dotenv.config();

const app: Application = express();

// Logger
app.use(logger);

// Set '/public' For Static Files
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Main Route
app.use(homeRouter);

const { PORT, HOST } = process.env;
app.listen(PORT, () =>
  console.log(`Server is Running on : http://${HOST}:${PORT}`)
);
