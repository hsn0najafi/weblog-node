import path from "path";

import "dotenv/config";
import express, { Application } from "express";
import morgan from "morgan";
import expressEjsLayouts from "express-ejs-layouts";

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

// Layouts for EJS
app.use(expressEjsLayouts);
app.set("layout", "layout");

// Main Route
app.use(require("./routes/home"));
app.use(require("./routes/loginSignup"));
app.use("/admin", require("./routes/dashboard"));

const { PORT, HOST, NODE_ENV } = process.env;
app.listen(PORT, () =>
  console.log(
    `Server is Running on -> http://${HOST}:${PORT} and ${NODE_ENV} Mode`
  )
);
