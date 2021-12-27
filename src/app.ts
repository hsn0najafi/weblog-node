import path from "path";

import "dotenv/config";
import express, { Application } from "express";
import morgan from "morgan";

import { dataBaseConnection } from "./utils/db";

// DataBase Connection
dataBaseConnection();

const app: Application = express();

// Logger
process.env.NODE_ENV === "Development" && app.use(morgan("dev"));

// Set '/public' For Static Files
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Main Route
app.use(require("./routes/home").homeRouter);

const { PORT, HOST, NODE_ENV } = process.env;
app.listen(PORT, () =>
  console.log(
    `Server is Running on -> http://${HOST}:${PORT} and ${NODE_ENV} Mode`
  )
);
