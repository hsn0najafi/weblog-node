// import "dotenv/config";
import dotenv from "dotenv";
import express, { Application, Request, Response } from "express";

dotenv.config();

const app: Application = express();

// Main Route
app.get("/", (_: Request, res: Response) => {
  res.send("Hello");
});

const PORT = process.env.PORT;
app.listen(PORT, () =>
  console.log(`Server is Running on : http://${"127.0.0.1"}:${PORT}`)
);
